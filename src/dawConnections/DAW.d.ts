export interface DAW {
    modifyBass(amount: number): boolean;
    playSound(name: string): boolean;
    getSounds(): string;
}