import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingCtxProps {
  children: ReactNode;
}

interface LoadingCtxData {
  isLoading: boolean;
  toggleLoading: (val: boolean) => void;
}

const LoadingContext = createContext({} as LoadingCtxData);

export function LoadingProvider({ children }: LoadingCtxProps) {
  const [isLoading, setIsLoading] = useState(true);

  function toggleLoading(val: boolean) {
    setIsLoading(val);
  }

  return (
    <LoadingContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext);
  return context;
}