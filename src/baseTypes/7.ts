/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum isWeekendEnum{
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 1,
  WEDNESDAY = 1,
  THURSDAY = 1,
  FRIDAY = 1,
  SATURDAY = 0
}

function isWeekend(day: isWeekendEnum){
  if(day)
  console.log('Будніій...')
  else console.log('Вихідний!!')

}

isWeekend(isWeekendEnum.SATURDAY);

export{};