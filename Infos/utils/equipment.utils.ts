import { Equipment, EquipmentItem, EquipmentStats, BaseStats, ActualStats } from '../types/interfaces';

export function getEquipmentBonusStats<T extends keyof EquipmentItem>(equipment: Equipment, key: T): number {
    let bonus = 0;
    for (let equipKey in equipment) {
        if (equipment.hasOwnProperty(equipKey)) {
            let equippedItem = equipment[equipKey as keyof Equipment];
            if (equippedItem && (key in equippedItem) && typeof equippedItem[key] === 'number') {
                bonus += equippedItem[key];
            }
        }
    }
    return bonus;
}

export function getAllEquipmentBonusStats(equipment: Equipment): EquipmentStats {
    return {
        bonusHp: getEquipmentBonusStats(equipment, 'bonusHp'),
        bonusArmor: getEquipmentBonusStats(equipment, 'bonusArmor'),
        bonusAttackDmg: getEquipmentBonusStats(equipment, 'bonusAttackDmg'),
        bonusAttackSpd: getEquipmentBonusStats(equipment, 'bonusAttackSpd')
    };
}

export function createBaseEquipment(): Equipment {
    let equipment = {
        helmet: null,
        chest: null,
        pants: null,
        shoes: null,
        weapon: null,
        shield: null
    }
    return equipment
}

export function getActualStats(baseStats: BaseStats, equipmentStats: EquipmentStats) {
    let actualStats: ActualStats = {
        actualArmor: baseStats.baseArmor + equipmentStats.bonusArmor,
        actualAttackDmg: baseStats.baseAttackDmg + equipmentStats.bonusAttackDmg,
        actualAttackSpd: baseStats.baseAttackSpd + equipmentStats.bonusAttackSpd,
        actualHp: baseStats.baseHp + equipmentStats.bonusHp,
    }

    return actualStats
}

let testHelmet: EquipmentItem = { Name: "Metal Helmet", bonusArmor: 10 }
let testChest: EquipmentItem = { Name: "Metal Chest", bonusHp: 10 }
let testPants: EquipmentItem = { Name: "Metal Pants", bonusAttackSpd: 4 }
let testShoes: EquipmentItem = { Name: "Metal Shoes", bonusAttackDmg: 3 }
let testWeapon: EquipmentItem = { Name: "Metal Sword", bonusAttackDmg: 4 }
let testShield: EquipmentItem = { Name: "Metal Shield", bonusArmor: -2 }

export const testEquipment: Equipment = {
    helmet: testHelmet,
    chest: testChest,
    pants: testPants,
    shoes: testShoes,
    weapon: testWeapon,
    shield: testShield
}
