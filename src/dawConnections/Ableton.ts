import { AbstractDAW } from "./AbstractDaw.ts";
import { DAW } from "./DAW.d.ts";


export class Ableton extends AbstractDAW implements DAW {
    private AbletonConnection: any;
    
    public modifyBass(amount: number): boolean {
        throw new Error("Method not implemented.");
    }
    public playSound(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}