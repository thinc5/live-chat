import { Message } from "../chatConnections/Message.d.ts";

export interface Command {
  getMatchString(): string;
  matchString(body: string): boolean;
  act(message: Message): void;
}
