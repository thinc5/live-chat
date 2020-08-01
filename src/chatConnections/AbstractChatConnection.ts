import { Command } from "../commands/Command.d.ts";
import { ChatConnection } from "./ChatConnection.d.ts";

export abstract class AbstractChatConnection implements ChatConnection {
  private commands: Array<Command>;
  constructor() {
    this.commands = new Array<Command>();
  }

  public abstract connect(): void;

  public abstract channelConnect(channel: string): boolean;

  public registerCommand(command: Command): void {
    this.commands.push(command);
  }

  public getCommands(): Array<Command> {
    return this.commands;
  }

  public getCommandNames(): string {
    const commandNames: string[] = this.commands.map((command) =>
      command.getMatchString()
    );
    return commandNames.join(", ");
  }
}
