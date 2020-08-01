import { AbstractDAW } from "./AbstractDaw.ts";
import { DAW } from "./DAW.d.ts";

import Configuration from "../Config.ts";

const { SOUND_FOLDER, MUSIC_PLAYER } = Configuration;

export class GenericDAW extends AbstractDAW implements DAW {
  // private stream: any; // AudioStream interface
  private availableSounds: Map<string, string>;
  private player: string;

  constructor() {
    super();
    this.availableSounds = new Map<string, string>();
    for (const entry of Deno.readDirSync(SOUND_FOLDER)) {
      const name = entry.name.split(".")[0];
      this.availableSounds.set(name, `${SOUND_FOLDER}/${entry.name}`);
    }
    this.player = MUSIC_PLAYER;
  }

  public getSounds(): string {
    let sounds = "";
    let iterator = this.availableSounds.keys();
    while (1) {
      let { done, value } = iterator.next();
      if (done) {
        break;
      }
      sounds = sounds + " " + value;
    }
    return sounds;
  }

  public modifyBass(amount: number): boolean {
    // Does nothing at the moment.
    return true;
  }

  public playSound(name: string): boolean {
    if (this.availableSounds.has(name)) {
      const key: string | undefined = this.availableSounds.get(name);
      const file: string = key ? key : "";
      if (!file) {
        return false;
      }
      // console.log(`Playing sound: ${name} (${file})`);
      Deno.run({
        cmd: [this.player, file],
        stdout: "null",
        stderr: "null",
      });
      return true;
    }
    return false;
  }
}
