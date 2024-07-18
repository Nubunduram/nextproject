import { createBMS, createBaseStats, } from '../utils/character.utils';
import { Character } from './character';
import { getAllEquipmentBonusStats, createBaseEquipment, getActualStats } from '../utils/equipment.utils';

export function createCharacter() {
    let BMS = createBMS();
    let baseStats = createBaseStats();
    let equipment = createBaseEquipment();
    let equipmentStats = getAllEquipmentBonusStats(equipment);
    let actualStats = getActualStats(baseStats, equipmentStats);
    return new Character(BMS, baseStats, equipmentStats, actualStats, equipment);
}
