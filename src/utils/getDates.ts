export const months = [
  "Апр",
  "Май",
  "Июнь",
  "Июль",
  "Авг",
  "Сент",
  "Окт",
  "Нояб",
  "Дек",
  "Янв",
  "Февр",
  "Март",
];
export const weekDays: Record<string, string> = {
  0: "Пн",
  2: "Ср",
  4: "Пт",
};

export function getDaysInYear(year: number) {
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  const daysArray = [];
  const currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().split("T")[0];
    daysArray.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return daysArray;
}

export const getFormattedDate = (date: string) => {
  const inputDate = new Date(date);
  const months = [
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
    "января",
    "февраля",
    "марта",
  ];

  const day = inputDate.getDate();
  const monthIndex = inputDate.getMonth();
  const year = inputDate.getFullYear();
  const weekday = inputDate.getDay();

  const fullWeekDays: Record<string, string> = {
    0: "Вторник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
    6: "Воскресенье",
  };
  return (
    fullWeekDays[weekday] + ", " + day + ", " + months[monthIndex] + ", " + year
  );
};
