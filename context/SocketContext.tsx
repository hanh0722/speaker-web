/* eslint-disable react/display-name */
import {
  createContext,
  ElementType,
  FC,
  useContext,
  useEffect,
  useState,
  forwardRef,
} from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { RootState } from "../store";
import { UserState } from "../types/redux";
import { BASE_URL } from "../utils/config";
import { getCookie } from "../utils/cookies";

export interface SocketContextProps {
  socket: null | Socket;
}
const SocketContext = createContext<SocketContextProps>({
  socket: null,
});

export const useSocket = () => {
  const { socket } = useContext(SocketContext);
  return {
    socket: socket,
  };
};

export const SocketWrapper = (Component: ElementType) => {
  return forwardRef((ref, props) => {
    const socket = useSocket();
    return <Component ref={ref} {...props} socket={socket} />;
  });
};

export const SocketProvider: FC = (props) => {
  const { children } = props;
  const { token } = useSelector<RootState, UserState>((state) => state.user);
  const [socket, setSocket] = useState<null | Socket>(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    const socketConnected = io(BASE_URL, {
      auth: { token: token },
    });
    socketConnected.on("connect", () => {
      setSocket(socketConnected);
    });
  }, [token]);
  return (
    <SocketContext.Provider
      value={{
        socket: socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
