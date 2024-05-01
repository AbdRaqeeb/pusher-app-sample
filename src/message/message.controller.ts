import { Controller, Post } from "@nestjs/common";
import { MessageService } from './message.service';
import { PusherService } from "../pusher/pusher.service";

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService, private readonly pusherService: PusherService) {}

  @Post('/send')
  async send() {
    const message = this.messageService.send();

    this.pusherService.pusher.trigger('private-chat-end', 'send_message', message);

    return message;
  }
}
