import * as crypto from "node:crypto";
import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";


@Injectable()
export class MessageService {
  send() {
    return {
      id: crypto.randomUUID(),
      user: faker.person.fullName(),
      message: faker.word.words(10),
    };
  }
}
