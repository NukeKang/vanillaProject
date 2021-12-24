let gameStartButton = document.querySelector('.game_start');
let inputNumber = document.querySelector('.input_number');
let gameRestart = document.querySelector('.game_restart');
let answer = '';

gameStartButton.addEventListener('click', handleStartButtonClick);

function handleStartButtonClick () {
    // make random three digit number
    answer = Math.floor(Math.random() * (1000 - 100) + 100);

    let gameCount = 0; // chance
    console.log(answer); // check number

    inputNumber.addEventListener('keypress', enterkey);
    function enterkey () {
        if (window.event.keyCode == 13) {
            //정답일 때,
            if (answer == inputNumber.value) {
                alert("정답입니다!")
                result.innerHTML = '';
                inputNumber.value = '';
                inputNumber.removeEventListener('keypress', enterkey);
                gameCount = 0;
                //게임 리스타트 
                gameRestart.style.visibility = "visible"

            } else { //답이 틀리면
                let strikeCount = 0;
                let ballCount = 0;
                gameCount++;

                if (gameCount === 10) {
                    alert("게임오버! 정답은 " + answer);
                    gameCount = 0;
                    // restart game
                    inputNumber.removeEventListener('keypress', enterkey);
                    inputNumber.value = '';
                    result.innerHTML = '';
                    // 게임리스타트
                    gameRestart.style.visibility = "visible"
                } else {
                    // strike와 ball 판정.
                    for (let i = 0; i < 3; i++) {
                        if (answer.toString()[i] === inputNumber.value[i]) {
                            strikeCount++;
                            ballCount--;
                        };
                    };
    
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (answer.toString()[i] === inputNumber.value[j]) {
                                ballCount++;
                            };
                        };
                    };
                    result.innerHTML = `${strikeCount} 스트라이크, ${ballCount} 볼입니다. </br> 기회 ${10 - gameCount}번 남았습니다.`
                }
            };
    
            // 세자리 이상 입력하면 알림창 뜨기
            if (inputNumber.value.length > 3) {
                alert('세자리 숫자를 입력해주세요.');
                result.innerHTML = '';
                gameCount = 0;
            };
        };
    };
};
