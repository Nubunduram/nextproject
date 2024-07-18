import { createBMS, createBaseStats, } from '../utils/character.utils';
import { Character } from './character';
import { getAllEquipmentBonusStats, createBaseEquipment, getActualStats } from '../utils/equipment.utils';
import { BASE_LVL } from '../types/constants';

export function createCharacter(name: string) {
    let level = BASE_LVL;
    let BMS = createBMS();
    let baseStats = createBaseStats();
    let equipment = createBaseEquipment();
    let equipmentStats = getAllEquipmentBonusStats(equipment);
    let actualStats = getActualStats(baseStats, equipmentStats);
    return new Character(name, level, BMS, baseStats, equipmentStats, actualStats, equipment);
}
