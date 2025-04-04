import { Injectable } from '@nestjs/common';
import { WebsocketsGateway } from './websockets.gateway';

@Injectable()
export class WebsocketsService {
  constructor(private readonly websocketsGateway: WebsocketsGateway) {}

  broadcastEvent(event: string, payload: any) {
    this.websocketsGateway.server.emit(event, payload);
  }
}
