import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useLoading } from "./LoadingContext";

interface IUser {
  email?: string;
  id: string;
}

interface AuthCtxProps {
  children: ReactNode;
}

interface AuthCtxData {
  user: IUser | null;
  register: (credentials: SignCredentials) => Promise<void>;
  login: (credentials: SignCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

interface SignCredentials {
  email: string;
  password: string;
}

const AuthContext = createContext({} as AuthCtxData);

export function AuthProvider({ children }: AuthCtxProps) {
  const { toggleLoading } = useLoading();
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  async function logout() {
    try {
      toggleLoading(true);
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      toggleLoading(false);
    }
  }

  async function register({ email, password }: SignCredentials) {
    try {
      toggleLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setUser({
        email: user.email ?? "",
        id: user.uid
      });
      navigate("/");
    } catch (err) {
      toast.error("An unexpected error occurred while sign up");
    } finally {
      toggleLoading(false);
    }
  }

  async function login({ email, password }: SignCredentials) {
    try {
      toggleLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser({
        email: user.email ?? "",
        id: user.uid
      });
      navigate("/");
    } catch (err) {
      toast.error("Email or password incorrect!");
    } finally {
      toggleLoading(false);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (fireUser) => {
      if (fireUser) {
        setUser({
          email: String(fireUser.email),
          id: fireUser.uid
        })
      } else {
        navigate("/login")
      }
      toggleLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}