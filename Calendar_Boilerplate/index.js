var currentDay = document.querySelectorAll('p');
var td = document.querySelectorAll('td');
var today = new Date();
var day = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var weekday = today.getDay();
var firstDay = new Date(year, month, 1).getDay(); // 현재 월의 1일이 해당하는 요일
var lastDay = new Date(year, month + 1, 0); // 현재 월의 마지막 일
// 오늘 요일 구하기
var optionsD = {weekday: 'short'};
var dayToString = new Intl.DateTimeFormat('en-US', optionsD).format(today);
currentDay[0].textContent = dayToString;
// 오늘 날짜 구하기
currentDay[1].textContent = day;
// 오늘 월, 연도 구하기
var optionsM = {month: 'short'};
var monthToString = new Intl.DateTimeFormat('en-US', optionsM).format(today);
currentDay[2].textContent = `${monthToString} ${year}`
//현재 월의 1일이 무슨 요일일까?
// 현재 월의 1일 전에는 빈칸으로 만들기
for (var i = 0; i < firstDay; i++) {
    td[i].textContent = '';
}


for (var i = 1; i <= lastDay.getDate(); i++) {
    td[firstDay].textContent = i;
    firstDay++
    }

// 오늘 날짜 캘린더에서 표시해주기
for (var i = 0; i < td.length; i++) {
    if (Number(td[i].textContent) === day) {
        td[i].innerHTML = `<span class="active"> ${day} </span>`
    }
};