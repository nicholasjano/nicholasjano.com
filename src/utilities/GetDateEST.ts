export const getMonthlyDates = () => {
  // Get current date in EST
  const today = new Date();
  const estFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });

  // Get current month date
  const currMonth = estFormatter.format(today);

  // Get the target day we want to maintain
  const targetDay = today.getDate();

  // Create a date for previous month
  const prevDate = new Date(today);
  prevDate.setMonth(today.getMonth() - 1);

  // Get the last day of the previous month
  const lastDayOfPrevMonth = new Date(
    prevDate.getFullYear(),
    prevDate.getMonth() + 1,
    0
  ).getDate();

  // If our target day exists in previous month, use it
  // If not, use the last day of the previous month
  if (targetDay > lastDayOfPrevMonth) {
    prevDate.setDate(lastDayOfPrevMonth);
  } else {
    prevDate.setDate(targetDay);
  }

  // Format previous month date
  const prevMonth = estFormatter.format(prevDate);

  return {
    prevMonth,
    currMonth,
  };
};
