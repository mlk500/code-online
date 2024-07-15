import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

const useSocket = (url: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url, {
      transports: ['websocket'],
    });

    socketIo.on('connect', () => {
      console.log('Socket connected');
      setSocket(socketIo);
    });

    socketIo.on('connect_error', (error) => {
      console.error('socket connection error:', error);
    });

    return () => {
      console.log('Disconnecting socket');
      socketIo.disconnect();
    };
  }, [url]);

  return socket;
};

export default useSocket;
