/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum isWeekendEnum{
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

function isWeekend(day: isWeekendEnum){
  switch(day)
  {
    case isWeekendEnum.SUNDAY:
    case isWeekendEnum.SATURDAY:
      console.log("Вихіднииий!!");
      break;
      default:
        console.log('Будній..');
        
  }

}

isWeekend(isWeekendEnum.SATURDAY);

export{};