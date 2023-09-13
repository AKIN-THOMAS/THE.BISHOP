document.addEventListener("DOMContentLoaded", () => {
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const currentDay = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

  const getCurrentDayOfTheWeek = () => {
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    console.log(daysOfTheWeek[today.getUTCDay()]);
    return daysOfTheWeek[today.getUTCDay()];
  };

  const getUTCTime = () => {
    const time = new Date();
    return time.toUTCString();
  };

  // currentDay.textContent = getCurrentDayOfTheWeek();
  // utcTime.textContent = getUTCTime();
  slackUserName.textContent = "Akin-Thomas Bishop";
});
