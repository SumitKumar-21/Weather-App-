export function getCurrentLocalTime(timezoneOffset) {
  const localTime = new Date(Date.now() + timezoneOffset * 1000);

  return localTime.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "numeric",
   
    hour12: true
  });
}