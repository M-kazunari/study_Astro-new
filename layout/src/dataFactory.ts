import type { Menu } from './interfaces';

export const newMenuList: Map<number, Menu> = new Map();
newMenuList.set(22345, { id: 22345, name: 'スパイシーチャイ', price: 1000 });
newMenuList.set(35679, { id: 35679, name: '濃い味コーヒーゼリー', price: 2000 });

export const newMenuArray: Menu[] = [...newMenuList.values()];