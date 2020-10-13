import type { IHero } from "../interfaces";
import { EElement, ERole, EBuff } from "../enums";

const pair = (type, value) => {
    return { type, value };
};

const Heroes: IHero[] = [
    {
        name: 'Marina',
        element: EElement.Water,
        role: ERole.Tanker,
        stats: {
            atk: {
                0: [148, 161, 175],
                1: [536, 583, 633],
                2: 699,
            },
            hp: {
                0: [1399, 1520, 1652],
                1: [18353, 19949, 21684],
                2: 26432,
            },
            def: {
                0: [89, 97, 106],
                1: [324, 352, 383],
                2: 423,
            },
            dmgReduction: 19,
            critChance: 0,
            cardSlots: 2,
            resistances: [pair(EElement.Fire, 30), pair(EElement.Earth, -30)],
            buffs: [
                pair(EBuff.PARTY_HP, [12, 27, 40]),
                pair(EBuff.WEAPON_SKILL_REGEN_SPEED, 8),
            ],
        },
    },
    {
        name: 'Bari',
        element: EElement.Earth,
        role: ERole.Ranged,
        stats: {
            atk: {
                0: [219, 238, 259],
                1: [795, 864, 939],
                2: 1037,
            },
            hp: {
                0: [1077, 1171, 1273],
                1: [14139, 15369, 16705],
                2: 20363,
            },
            def: {
                0: [35, 38, 41],
                1: [126, 137, 149],
                2: 164,
            },
            dmgReduction: 22,
            critChance: 4,
            cardSlots: 2,
            resistances: [pair(EElement.Fire, -30), pair(EElement.Water, 30)],
            buffs: [
                pair(EBuff.PARTY_SKILL_ATK, [25, 45, 80]),
                pair(EBuff.SHIELD_INCREASE_ON_BATTLE_START, 10),
            ],
        },
    },
    {
        name: 'Oghma',
        element: EElement.Dark,
        role: ERole.Tanker,
        stats: {
            atk: {
                0: [131, 142, 154],
                1: [473, 514, 559],
                2: 617,
            },
            hp: {
                0: [1285, 1397, 1518],
                1: [16865, 18331, 19925],
                2: 24289,
            },
            def: {
                0: [38, 41, 44],
                1: [136, 148, 161],
                2: 178,
            },
            dmgReduction: 22,
            critChance: 0,
            cardSlots: 2,
            resistances: [pair(EElement.Basic, 30), pair(EElement.Light, -30)],
            buffs: [
                pair(EBuff.PARTY_DEF, [15, 45, 45]),
                pair(EBuff.WEAPON_SKILL_REGEN_SPEED, 4),
                pair(EBuff.HP_ON_ENEMY_KILL, [null, null, 1]),
            ],
        },
    },
    {
        name: 'Vishuvac',
        element: EElement.Fire,
        role: ERole.Warrior,
        stats: {
            atk: {
                0: [151, 161, 171],
                1: [547, 582, 619],
                2: 684,
            },
            hp: {
                0: [1196, 1272, 1354],
                1: [15695, 16697, 17763],
                2: 21653,
            },
            def: {
                0: [35, 37, 39],
                1: [126, 134, 143],
                2: 158,
            },
            dmgReduction: 26,
            critChance: 4,
            cardSlots: 2,
            resistances: [pair(EElement.Water, -30), pair(EElement.Earth, 30)],
            buffs: [
                pair(EBuff.PARTY_HP, [13, 29, 40]),
                pair(EBuff.SKILL_ATK, [null, null, 5]),
                pair(EBuff.ATK_ON_ENEMY_KILL, [null, null, 5]),
            ],
        },
    },
    {
        name: 'Tinia',
        element: EElement.Earth,
        role: ERole.Ranged,
        stats: {
            atk: {
                0: [155, 168, 183],
                1: [561, 610, 663],
                2: 732,
            },
            hp: {
                0: [1098, 1193, 1297],
                1: [14408, 15661, 17023],
                2: 20750,
            },
            def: {
                0: [28, 30, 33],
                1: [101, 110, 119],
                2: 132,
            },
            dmgReduction: 30,
            critChance: 3,
            cardSlots: 2,
            resistances: [pair(EElement.Fire, -30), pair(EElement.Water, 30)],
            buffs: [
                pair(EBuff.PARTY_RANGED_ATK, [15, 25, 50]),
                pair(EBuff.ATK_ON_ENEMY_KILL, [null, null, 5]),
                pair(EBuff.HP_ON_ENEMY_KILL, [null, null, 0.5]),
            ],
        },
    },
];

export default Heroes;
