import { Command } from "./Command.d.ts";
import { Message } from "../chatConnections/Message.d.ts";

/**
 * Generic Command class, all commands extend this class.
 */
export abstract class AbstractCommand implements Command {
  protected command: string;

  constructor() {
    this.command = "";
  }

  public getMatchString(): string {
    return this.command;
  }

  // Default implementation checks if strings exactly match.
  public matchString(body: string): boolean {
    return this.command === body;
  }

  public abstract act(message: Message): void;
}
