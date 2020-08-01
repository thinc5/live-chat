import { Command } from "./Command.d.ts";
import { Message } from "../chatConnections/Message.d.ts";
import { DAW } from "../dawConnections/DAW.d.ts";
import { AbstractCommand } from "./AbstractCommand.ts";

export class PlaySoundCommand extends AbstractCommand implements Command {
  private daw: DAW;
  constructor(daw: DAW) {
    super();
    this.command = "playsound";
    this.daw = daw;
  }

  // Custom match string to parse the bass commands.
  public matchString(body: string): boolean {
    if (body.substr(0, this.command.length) != this.command) {
      return false;
    }
    return true;
  }

  public act(message: Message) {
    const sound: string = message.getBody().split(" ")[1];
    if (sound === "help") {
      message.reply(true, "Available sounds: " + this.daw.getSounds());
      return;
    }
    if (!this.daw.playSound(sound)) {
      message.reply(true, "Unable to play sound: " + sound);
    }
  }
}
