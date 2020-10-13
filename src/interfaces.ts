import type { EBuff, EElement, ERole } from "./enums";

export interface IStat {
    0: number[];
    1: number[];
    2: number;
}

export interface IBuff {
    type: EBuff;
    value: number | null;
}

export interface IResistance {
    type: EElement;
    value: number;
}

export interface IStats {
    atk: IStat;
    def: IStat;
    hp: IStat;
    dmgReduction: number;
    critChance: number;
    cardSlots: number;
    resistances: IResistance[];
    buffs: IBuff[];
}

export interface IHero {
    name: string;
    element: EElement;
    role: ERole;
    stats: IStats;
}