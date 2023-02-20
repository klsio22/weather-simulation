const time = (number: number) =>
  new Date(number * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

export function formatHour(number: number) {
  return time(number);
}
