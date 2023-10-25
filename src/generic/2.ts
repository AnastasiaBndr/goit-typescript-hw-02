/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare <T extends AllType, U extends AllType>(top:Pick<T, keyof AllType>, bottom:Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const human1: AllType={name:"Alan", position:4,color:"black", weight:67};
const human2: AllType={name:"Alan6", position:10,color:"black", weight:67};

compare(human1, human2)
export {};