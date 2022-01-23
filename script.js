// Variables
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');

const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Tas';
    if (letter === 'p') return 'Kagit';
    return 'Makas';
}

function win(user, computer) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_div.innerHTML = convertToWord(user) + '(kullanıcı) alır ' + convertToWord(computer) + '(bilgisayar)' + '. Kazandin!'
}
function lose(user, computer) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    userScore_span.textContent = userScore;
    result_div.innerHTML = convertToWord(computer) + '(bilgisayar) alır ' + convertToWord(user) + '(kullanıcı)' + '. Bilgisayar Kazandi!'

}
function draw(computer, user) {
    result_div.innerHTML = convertToWord(user) + ' eşittir ' + convertToWord(computer) + '. Esit!'

}

function game(userChoice, element) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            element.parentElement.style.border = '4px solid green'

            setTimeout(() => {
                element.parentElement.style.border = '4px solid white'

            }, 1000);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            element.parentElement.style.border = '4px solid red'

            setTimeout(() => {
                element.parentElement.style.border = '4px solid white'

            }, 1000);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {

    rock_div.addEventListener('click', function (e) {
        game('r', e.target);
    });

    paper_div.addEventListener('click', function (e) {
        game('p', e.target);
    });

    scissors_div.addEventListener('click', function (e) {
        game('s', e.target);
    });
}

main();
