import { SocketProvider } from "./app/presentation/context/SocketContext";
import { RouterPage } from "./app/presentation/routers/RouterPage";

export const TicketsApp = () => {
  return (
    <SocketProvider>
      <RouterPage />
    </SocketProvider>
  );
};
