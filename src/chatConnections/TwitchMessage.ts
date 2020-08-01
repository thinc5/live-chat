import { Message as TMessage } from "https://deno.land/x/pterodactyl/mod.ts";

import { Message } from "./Message.d.ts";
import { AbstractMessage } from "./AbstractMessage.ts";

export class TwitchMessage extends AbstractMessage implements Message {
  private username: string;
  private body: string;
  private chat: (message: string) => void;
  constructor(message: TMessage, chat: (message: string) => void) {
    super();
    this.username = message.username;
    this.body = message.says;
    this.chat = chat;
  }

  public getUsername(): string {
    return this.username;
  }

  public getBody(): string {
    return this.body;
  }

  public reply(mention: boolean, body: string): boolean {
    // Append the mention to the body of the message.
    if (mention) {
      body = `@${this.getUsername()} ${body}`;
    }
    this.chat(body);
    return true;
  }
}
