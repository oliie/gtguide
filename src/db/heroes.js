const ROLES = {
    TANK: 'Tanker',
    RANGED: 'Ranged',
    WARRIOR: 'Warrior',
};

const ELEMENTS = {
    WATER: 'Water',
    FIRE: 'Fire',
    EARTH: 'Earth',
    DARK: 'Dark',
    LIGHT: 'Light',
    BASIC: 'Basic',
};

const BUFFS = {
    PARTY_HP: '[Party] HP',
    PARTY_SKILL_ATK: '[Party] Skill Atk',
    PARTY_DEF: '[Party] Def',
    SKILL_ATK: 'Skill Atk',
    WEAPON_SKILL_REGEN_SPEED: 'Weapon Skill Regen Speed',
    SHIELD_INCREASE_ON_BATTLE_START: 'Shield increase on battle start',
    HP_ON_ENEMY_KILL: 'HP Recovery on enemy kill',
    ATK_ON_ENEMY_KILL: 'Atk increase on enemy kill',
};

const pair = (type, value) => {
    return { type, value };
};

const Heroes = [
    {
        name: 'Marina',
        element: ELEMENTS.WATER,
        role: ROLES.TANK,
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
            resistances: [pair(ELEMENTS.FIRE, 30), pair(ELEMENTS.EARTH, -30)],
            buffs: [
                pair(BUFFS.PARTY_HP, [12, 27, 40]),
                pair(BUFFS.WEAPON_SKILL_REGEN_SPEED, 8),
            ],
        },
    },
    {
        name: 'Bari',
        element: ELEMENTS.EARTH,
        role: ROLES.RANGED,
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
            resistances: [pair(ELEMENTS.FIRE, -30), pair(ELEMENTS.WATER, 30)],
            buffs: [
                pair(BUFFS.PARTY_SKILL_ATK, [25, 45, 80]),
                pair(BUFFS.SHIELD_INCREASE_ON_BATTLE_START, 10),
            ],
        },
    },
    {
        name: 'Oghma',
        element: ELEMENTS.DARK,
        role: ROLES.TANK,
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
            resistances: [pair(ELEMENTS.BASIC, 30), pair(ELEMENTS.LIGHT, -30)],
            buffs: [
                pair(BUFFS.PARTY_DEF, [15, 45, 45]),
                pair(BUFFS.WEAPON_SKILL_REGEN_SPEED, 4),
                pair(BUFFS.HP_ON_ENEMY_KILL, [null, null, 1]),
            ],
        },
    },
    {
        name: 'Vishuvac',
        element: ELEMENTS.FIRE,
        role: ROLES.WARRIOR,
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
            resistances: [pair(ELEMENTS.WATER, -30), pair(ELEMENTS.EARTH, 30)],
            buffs: [
                pair(BUFFS.PARTY_HP, [13, 29, 40]),
                pair(BUFFS.SKILL_ATK, [null, null, 5]),
                pair(BUFFS.ATK_ON_ENEMY_KILL, [null, null, 5]),
            ],
        },
    },
];

export default Heroes;
