import { BodyMindSoulStats, BaseStats, EquipmentStats, Equipment, ActualStats } from '../types/interfaces';

export class Character {
    bodyMindSoulStats: BodyMindSoulStats;
    baseStats: BaseStats;
    equipmentStats: EquipmentStats;
    actualStats: ActualStats;
    equipment: Equipment;

    constructor(
        bodyMindSoulStats: BodyMindSoulStats,
        baseStats: BaseStats,
        equipmentStats: EquipmentStats,
        actualStats: ActualStats,
        equipment: Equipment,
    ) {
        this.bodyMindSoulStats = bodyMindSoulStats;
        this.baseStats = baseStats;
        this.equipmentStats = equipmentStats;
        this.actualStats = actualStats;
        this.equipment = equipment;
    }

    test() {
        console.log(`
            bodyMindSoulStats: ${this.bodyMindSoulStats}
            body: ${this.bodyMindSoulStats.body},
            mind: ${this.bodyMindSoulStats.mind},
            soul: ${this.bodyMindSoulStats.soul},
            
            baseStats: ${this.baseStats}
            baseArmor: ${this.baseStats.baseArmor},
            baseAttackDmg: ${this.baseStats.baseAttackDmg},
            baseAttackSpd: ${this.baseStats.baseAttackSpd},
            baseHp: ${this.baseStats.baseHp},
            
            equipmentStats: ${this.equipmentStats},
            bonusArmor: ${this.equipmentStats.bonusArmor},
            bonusAttackDmg: ${this.equipmentStats.bonusAttackDmg},
            bonusAttackSpd: ${this.equipmentStats.bonusAttackSpd},
            bonusHp: ${this.equipmentStats.bonusHp},

            actualStats: ${this.actualStats},
            actualArmor: ${this.actualStats.actualArmor},
            actualAttackDmg: ${this.actualStats.actualAttackDmg},
            actualAttackSpd: ${this.actualStats.actualAttackSpd},
            actualHp: ${this.actualStats.actualHp},

            equipment: ${this.equipment},
            equipmentHelmet: ${this.equipment.helmet},
            equipmentChest: ${this.equipment.chest},
            equipmentPants: ${this.equipment.pants},
            equipmentShoes: ${this.equipment.shoes},
            equipmentWeapon: ${this.equipment.weapon},
            equipmentShield: ${this.equipment.shield}
            `);
    }
}
