export const TimeDiff = (previous) => {
  const current = Date.now();
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    const seconds = Math.round(elapsed / 1000);
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return `${days > 1 ? `${days} days ago` : "Yesterday"}`;
  } else if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

export const Duration = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  return minutes.substr(-2) + ":" + seconds.substr(-2);
};
