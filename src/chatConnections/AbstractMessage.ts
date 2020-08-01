import { Message } from "./Message.d.ts";

export abstract class AbstractMessage implements Message {
  public abstract getUsername(): string;

  public abstract getBody(): string;

  public abstract reply(mention: boolean, body: string): boolean;
}
