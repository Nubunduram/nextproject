export interface BodyMindSoulStats {
    body: number;
    mind: number;
    soul: number;
}

export interface BaseStats {
    baseArmor: number;
    baseAttackDmg: number;
    baseAttackSpd: number;
    baseHp: number;
}

export interface EquipmentStats {
    bonusArmor: number;
    bonusAttackDmg: number;
    bonusAttackSpd: number;
    bonusHp: number;
}

export interface EquipmentItem {
    Name: string;
    bonusHp?: number;
    bonusArmor?: number;
    bonusAttackDmg?: number;
    bonusAttackSpd?: number;
}

export interface Equipment {
    helmet: EquipmentItem | null;
    chest: EquipmentItem | null;
    pants: EquipmentItem | null;
    shoes: EquipmentItem | null;
    weapon: EquipmentItem | null;
    shield: EquipmentItem | null;
}

export interface ActualStats {
    actualArmor: number;
    actualAttackDmg: number;
    actualAttackSpd: number;
    actualHp: number;
}