import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { PusherModule } from "../pusher/pusher.module";

@Module({
  imports: [PusherModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
