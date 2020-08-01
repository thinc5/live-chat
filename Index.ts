import { DAW } from "./src/dawConnections/DAW.d.ts";
import { ChatConnection } from "./src/chatConnections/ChatConnection.d.ts";
import { GenericDAW } from "./src/dawConnections/GenericDAW.ts";
import { TwitchConnection } from "./src/chatConnections/TwitchConnection.ts";
import { HelpCommand } from "./src/commands/HelpCommand.ts";
import { BassCommand } from "./src/commands/BassCommand.ts";
import { PlaySoundCommand } from "./src/commands/PlaySoundCommand.ts";

function main() {
  const daw: DAW = new GenericDAW();

  console.log("Creating Twitch Client");
  const twitch: ChatConnection = new TwitchConnection();

  console.log("Registering Commands");
  twitch.registerCommand(new HelpCommand(twitch));
  twitch.registerCommand(new BassCommand());
  twitch.registerCommand(new PlaySoundCommand(daw));

  console.log("Connecting to twitch irc....");
  twitch.connect();
}

main(); 
