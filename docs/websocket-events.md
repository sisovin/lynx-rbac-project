# WebSocket Events Documentation

This document provides an overview of the WebSocket events used in the Lynx RBAC Project.

## Overview

WebSockets are used in this project to enable real-time communication between the client and the server. This allows for features such as real-time notifications and updates.

## Events

### Client-Side Events

1. **connect**
   - Description: Triggered when the client successfully connects to the WebSocket server.
   - Payload: None

2. **disconnect**
   - Description: Triggered when the client disconnects from the WebSocket server.
   - Payload: None

3. **message**
   - Description: Triggered when the client receives a message from the WebSocket server.
   - Payload: The message data

### Server-Side Events

1. **connection**
   - Description: Triggered when a client successfully connects to the WebSocket server.
   - Payload: The client socket

2. **disconnect**
   - Description: Triggered when a client disconnects from the WebSocket server.
   - Payload: The client socket

3. **message**
   - Description: Triggered when the server receives a message from a client.
   - Payload: The message data

## Usage

### Client-Side

To handle WebSocket events on the client-side, you can use the following code:

```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

socket.on('message', (message) => {
  console.log('Message from server:', message);
});

const sendMessage = (message) => {
  socket.emit('message', message);
};
```

### Server-Side

To handle WebSocket events on the server-side, you can use the following code:

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log(`Message from client ${client.id}: ${payload}`);
    return 'Message received';
  }
}
```

## Conclusion

WebSockets provide a powerful way to enable real-time communication in your application. By understanding and utilizing the events described in this document, you can implement robust real-time features in the Lynx RBAC Project.
