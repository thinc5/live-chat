import { DAW } from "./DAW.d.ts";


export abstract class AbstractDAW implements DAW {
    public abstract modifyBass(amount: number): boolean;
    public abstract playSound(name: string): boolean;
    public abstract getSounds(): string;
}
