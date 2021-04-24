export const TimeDiff = (previous) => {
  const current = Date.now();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return "Hace " + Math.round(elapsed / 1000) + " segundos ";
  } else if (elapsed < msPerHour) {
    return "Hace " + Math.round(elapsed / msPerMinute) + " minutos";
  } else if (elapsed < msPerDay) {
    return "Hace " + Math.round(elapsed / msPerHour) + " horas";
  } else if (elapsed < msPerMonth) {
    return "Hace " + Math.round(elapsed / msPerDay) + " días";
  } else if (elapsed < msPerYear) {
    return "Hace " + Math.round(elapsed / msPerMonth) + " meses";
  } else {
    return "Hace " + Math.round(elapsed / msPerYear) + " años";
  }
};

export const Duration = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  return minutes.substr(-2) + ":" + seconds.substr(-2);
};
