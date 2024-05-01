import { Body, Controller, Post } from "@nestjs/common";
import { PusherService } from './pusher.service';
import { PusherAuthDto } from "./dto/pusher-auth.dto";

@Controller('/pusher')
export class PusherController {
  constructor(private readonly pusherService: PusherService) {}

  @Post('/auth')
  async create(@Body() body: PusherAuthDto) {
    const { socket_id, channel_name } = body;

    return this.pusherService.pusher.authorizeChannel(socket_id, channel_name);
  }

}
