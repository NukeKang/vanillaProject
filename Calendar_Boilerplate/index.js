const currentDay = document.querySelectorAll('p');
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const weekday = today.getDay();
// 오늘 요일 구하기
const optionsD = {weekday: 'short'};
const dayToString = new Intl.DateTimeFormat('en-US', optionsD).format(today);

currentDay[0].textContent = dayToString;
// 오늘 날짜 구하기
currentDay[1].textContent = day;
// 오늘 월, 연도 구하기
const optionsM = {month: 'short'};
const monthToString = new Intl.DateTimeFormat('en-US', optionsM).format(today);

currentDay[2].textContent = `${monthToString} ${year}`