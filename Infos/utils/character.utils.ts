import { MIN_BMS_STATS, MAX_BMS_STATS, MIN_BASE_HP, MAX_BASE_HP, BASE_ARMOR, BASE_ATTACK_DMG, BASE_ATTACK_SPD } from '../types/types';
import { BodyMindSoulStats, BaseStats } from "../types/interfaces"

export function getRandomInt(min: number, max: number): number {
    if (min > max) {
        throw new Error("Min should be less than or equal to Max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createBMS(): BodyMindSoulStats {
    let baseBodyMindSoulStats: BodyMindSoulStats = {
        body: getRandomInt(MIN_BMS_STATS, MAX_BMS_STATS),
        mind: getRandomInt(MIN_BMS_STATS, MAX_BMS_STATS),
        soul: getRandomInt(MIN_BMS_STATS, MAX_BMS_STATS),
    };
    return baseBodyMindSoulStats;
}

export function createBaseStats(): BaseStats {
    let baseStats: BaseStats = {
        baseArmor: BASE_ARMOR,
        baseAttackDmg: BASE_ATTACK_DMG,
        baseAttackSpd: BASE_ATTACK_SPD,
        baseHp: getRandomInt(MIN_BASE_HP, MAX_BASE_HP)
    };
    return baseStats;
}
