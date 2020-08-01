import { Command } from "../commands/Command.d.ts";

export interface ChatConnection {
  connect(): void;
  channelConnect(channel: string): boolean;
  registerCommand(command: Command): void;
  getCommands(): Array<Command>;
  getCommandNames(): string;
}
