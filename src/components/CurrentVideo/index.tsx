import { useList } from "../../contexts/ListContext";
import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container } from "./styles";

export function CurrentVideo() {
  const { currentVideo } = useList();

  return (
    <Container>
      <Title>Current video</Title>
      {currentVideo?.id ? <VideoItem data={currentVideo} addMode /> : <p>No video is currently open</p>}
    </Container>
  )
}