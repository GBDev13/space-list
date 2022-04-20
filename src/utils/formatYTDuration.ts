import moment from "moment";

export function formatMs(duration: number) {
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return moment.utc(duration).format(hours > 0 ? "HH:mm:ss" : "mm:ss");
}

export function formatYTDuration(duration: string) {
  const milliseconds = moment.duration(duration).asMilliseconds();

  const formatted = formatMs(milliseconds);

  return {
    formatted,
    ms: milliseconds,
  };
}
