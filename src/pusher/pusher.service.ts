import { Injectable } from "@nestjs/common";
import * as Pusher from "pusher";
import * as process from "node:process";

@Injectable()
export class PusherService {
  pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_API_KEY,
      secret: process.env.PUSHER_API_SECRET,
      cluster: process.env.PUSHER_APP_CLUSTER,
      useTLS: true
    });
  }
}
