import {
  Client,
  Message as TMessage,
} from "https://deno.land/x/pterodactyl/mod.ts";

import { ChatConnection } from "./ChatConnection.d.ts";
import { Command } from "../commands/Command.d.ts";

import { AbstractChatConnection } from "./AbstractChatConnection.ts";
import { TwitchMessage } from "./TwitchMessage.ts";

import Configuration from "../Config.ts";

const {
  COMMAND_PREFIX,
  TWITCH_TOKEN,
  BOT_USERNAME,
  DEFAULT_CHANNEL,
} = Configuration;

export class TwitchConnection extends AbstractChatConnection
  implements ChatConnection {
  private instance: Client;

  constructor() {
    super();
    this.instance = new Client({
      username: BOT_USERNAME,
      password: TWITCH_TOKEN,
      channels: [DEFAULT_CHANNEL],
    });
  }

  public connect(): void {
    this.instance
      .connect()
      .then(() => {
        console.log(this.instance);
      })
      .catch((err) => {
        throw Error(err);
      });
    this.instance.addListener("chat", (message: TMessage) => {
      this.onMessage(message);
    });
  }

  public channelConnect(channel: string): boolean {
    this.instance.join(channel);
    return true;
  }

  private onMessage(message: TMessage): void {
    const parsedMessage = new TwitchMessage(message, (body: string) => {
      this.instance.chat(message.channel, body);
    });

    if (parsedMessage.getBody().substr(0, 1) !== COMMAND_PREFIX) {
      return;
    }

    // Fetch the commands to match.
    const commands = this.getCommands();

    // Do we have any commands?
    if (this.getCommands() === undefined || this.getCommands().length <= 0) {
      console.log("No commands registered!");
      return;
    }

    // Attempt to match the Message against the command and strip the prefix.
    const rawBody: string = parsedMessage
      .getBody()
      .substr(COMMAND_PREFIX.length, parsedMessage.getBody().length);

    for (let i = 0; i < commands.length; i++) {
      const command: Command = commands[i];
      if (command.matchString(rawBody)) {
        command.act(parsedMessage);
      }
    }
  }
}
