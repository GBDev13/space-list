import { Toaster } from "react-hot-toast";
import { useTheme } from "styled-components";

export function StyledToaster() {
  const { purple, foreground, red } = useTheme();

  return (
    <Toaster
      containerClassName="toastContainer"
      toastOptions={{
        position: 'bottom-center',
        error: {
          style: {
            background: red,
            color: foreground
          },
          iconTheme: {
            primary: foreground,
            secondary: red
          }
        },
        success: {
          style: {
            background: purple,
            color: foreground
          },
          iconTheme: {
            primary: foreground,
            secondary: purple
          }
        }
      }}
    />
  )
}