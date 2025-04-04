import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const connectWebSocket = () => {
  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });
};

export const sendMessage = (message: string) => {
  socket.emit('message', message);
};

export const onMessage = (callback: (message: any) => void) => {
  socket.on('message', callback);
};

export const disconnectWebSocket = () => {
  socket.disconnect();
};
