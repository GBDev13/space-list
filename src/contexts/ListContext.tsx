import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IVideo } from "../components/VideoItem";
import { formatYTDuration } from "../utils/formatYTDuration";
import { useLoading } from "./LoadingContext";
import { addDoc, collection, CollectionReference, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from "../config/firebase";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

interface ListCtxProps {
  children: ReactNode;
}

interface ListCtxData {
  list: IVideo[];
  totalTime: number;
  currentVideo: IVideo;
  createListItem: (videoData: IVideo) => Promise<void>;
  deleteListItem: (itemId: string) => Promise<void>;
}

const ListContext = createContext({} as ListCtxData);

export function ListProvider({ children }: ListCtxProps) {
  const { isLoading, toggleLoading } = useLoading();
  const { user } = useAuth();

  const [list, setList] = useState<IVideo[]>([]);
  const [currentVideo, setCurrentVideo] = useState({} as IVideo);

  const ref = collection(db, "videos") as CollectionReference<IVideo>;

  async function createListItem(videoData: IVideo) {
    if (isLoading) return;
    try {
      toggleLoading(true);

      const data = {
        ...videoData,
        userId: user?.id
      }

      const response = await addDoc(ref, data);
      setList(old => [...old, {
        ...data,
        docId: response.id
      }]);

      toast.success("Video successfully added to the list!");
    } catch (err) {
      toast.error("An unexpected error occurred while adding to the list");
    } finally {
      toggleLoading(false);
    }
  }

  async function deleteListItem(itemId: string) {
    if(isLoading) return;
    try {
      toggleLoading(true);
      const itemDoc = doc(db, "videos", itemId);
      await deleteDoc(itemDoc);

      setList(old => old.filter(video => video.docId !== itemId));
      toast.success("Video successfully deleted!");
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      toggleLoading(false);
    }
  }

  const getUserList = useCallback(async () => {
    if(!user?.id) return;
    try {
      toggleLoading(true);
      const userQuery = query(ref, where("userId", "==", user.id));
      const data = await getDocs(userQuery);
      const formattedData = data.docs.map((doc) => ({ ...doc.data(), docId: doc.id }));
      setList(formattedData);
    } catch (err) {
      toast.error("An unexpected error occurred while getting your list");
    } finally {
      toggleLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getUserList();
  }, [user])

  const ytBaseLink = "youtube.com/watch";
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  async function getCurrentVideoData(url: string) {
    const { data } = await axios.get(url);
    const video = data.items[0];
    const duration = formatYTDuration(video.contentDetails.duration);

    setCurrentVideo({
      id: video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.default.url,
      duration: duration.formatted,
      durationMs: duration.ms
    })
  }

  useEffect(() => {
    if(chrome?.tabs?.query) {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        const newURL = tabs[0].url;
        if(newURL && newURL.includes(ytBaseLink)) {
          const videoId = newURL.replace("https://www.youtube.com/watch?v=", "");
          const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics,contentDetails`;
          getCurrentVideoData(apiUrl);
        }
      })
    }
  }, [chrome.tabs]);

  const totalTime = useMemo(() => {
    return list.reduce((acc, video) => {
      return acc += video.durationMs
    }, 0)
  }, [list]);

  return (
    <ListContext.Provider value={{ list, totalTime, currentVideo, createListItem, deleteListItem }}>
      {children}
    </ListContext.Provider>
  )
}

export function useList() {
  const context = useContext(ListContext);
  return context;
}