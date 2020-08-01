import { Command } from "./Command.d.ts";
import { ChatConnection } from "../chatConnections/ChatConnection.d.ts";
import { Message } from "../chatConnections/Message.d.ts";
import { AbstractCommand } from "./AbstractCommand.ts";

export class HelpCommand extends AbstractCommand implements Command {
  private connection: ChatConnection;
  constructor(connection: ChatConnection) {
    super();
    this.command = "help";
    this.connection = connection;
  }

  public act(message: Message): void {
    message.reply(
      true,
      "Available commands: " + this.connection.getCommandNames()
    );
  }
}
