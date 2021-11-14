import HomePage from "./HomePage";
import { SocketProvider } from "./app/presentation/context/SocketContext";

export const TicketsApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};
