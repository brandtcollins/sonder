function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " yrs";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " mo";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hrs";
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (interval > 1 && interval < 2) {
      return Math.floor(interval) + " min";
    } else {
      return Math.floor(interval) + " mins";
    }
  }
  return "Just now";
}

export default timeSince;
