export const getMonthlyDates = () => {
  const today = new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
  const estFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });

  const currMonth = estFormatter.format(today);

  const targetDay = today.getDate();

  const prevDate = new Date(today);
  prevDate.setMonth(today.getMonth() - 1);

  const lastDayOfPrevMonth = new Date(
    prevDate.getFullYear(),
    prevDate.getMonth() + 1,
    0
  ).getDate();

  if (targetDay > lastDayOfPrevMonth) {
    prevDate.setDate(lastDayOfPrevMonth);
  } else {
    prevDate.setDate(targetDay);
  }

  const prevMonth = estFormatter.format(prevDate);

  return {
    prevMonth,
    currMonth,
  };
};
