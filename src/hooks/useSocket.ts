import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { getServerUrl } from '../../config';

const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const url = getServerUrl();
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
  }, []);

  return socket;
};

export default useSocket;