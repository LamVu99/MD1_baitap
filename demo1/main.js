const startGameEl = document.querySelector('#start-game');
const gameEl = document.querySelector('#game');
const endGameEl = document.querySelector('#end-game');

const levelOptionEl = document.querySelector('#level-option');
const memoryGameEl = document.querySelector('.memory-game');

const btnSighUp = document.querySelector('#signUp');
const btnSighIn = document.querySelector('#signIn');
const btnStartGame = document.querySelector('#btn-start-game');
const btnPlayAgain = document.querySelector('#btn-play-again');
const btnReload = document.querySelector('#btn-reload');

const timeEl = document.querySelector('#time');
const stepEl = document.querySelector('#step');

// Khai báo biến
let level;
let lockBoard = false; // Khóa không cho ấn
let firstCard = null; // Chứa phần tử DOM CARD khi mở lần 1
let secondCard = null; // Chứa phần tử DOM CARD khi mở lần 2
let score = 0;
let time = 0;
let step = 0;
let interval;

let sizes = {
    2: {
        row: 2,
        col: 2,
    },
    4: {
        row: 2,
        col: 4,
    },
    6: {
        row: 3,
        col: 4,
    },
};

let listCards = [
    {
        url:
            'https://i.pinimg.com/564x/ad/51/69/ad5169af83495ced4006a285e4c4774a.jpg',
        name: 'moderkaiser',
    },
    {
        url:
            'https://i.pinimg.com/564x/5a/66/86/5a668671f238bf2b2acef77294395422.jpg',
        name: 'leblanc',
    },
    {
        url:
            'https://i.pinimg.com/564x/c6/a6/90/c6a6904601ce0c2986cd6c88450fd178.jpg',
        name: 'Azir',
    },
    {
        url:
            'https://i.pinimg.com/564x/3a/ec/05/3aec056284ba9b6e7244903cbab75391.jpg',
        name: 'tarik',
    },
    {
        url:
            'https://i.pinimg.com/564x/21/e0/be/21e0be34f739e79309599ca37b534532.jpg',
        name: 'tryndamer',
    },
    {
        url:
            'https://i.pinimg.com/564x/a0/a6/62/a0a662db3e9b6e4f2b713d3a2788a69e.jpg',
        name: 'Ashee'
    },
];

let cards;

// Đảo vị trí các phần tử trong array
function shuffle(arr) {
    return arr.sort(function () {
        return 0.5 - Math.random();
    });
}

function renderCards(level) {
    // Đảo vị trí các phần tử trong mảng card
    listCards = shuffle(listCards);

    // Cắt lấy số phần tử = level
    let cardsSlice = listCards.slice(0, level);

    // Nhân đôi mảng card
    cards = [...cardsSlice, ...cardsSlice];

    // Đảo vị trí phần tử trong mảng
    cards = shuffle(cards);

    // Set kích thước cho game board
    let size = sizes[level];
    memoryGameEl.style.gridTemplateColumns = `repeat(${size.col}, 190px)`;
    memoryGameEl.style.gridTemplateRows = `repeat(${size.row}, 250px)`;

    // Hiển thị lên trên giao diện
    memoryGameEl.innerHTML = '';
    for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        memoryGameEl.innerHTML += `
            <div 
                class="memory-card" 
                data-name="${c.name}"
                onclick="flipCard(this)"
            >
                <img src="${c.url}" class="front-face" alt="${c.name}">
                <img src="https://i.pinimg.com/564x/35/b4/49/35b449885541d955906b1fbce61b992e.jpg"
                    class="back-face" alt="card-back">
            </div>
        `;
    }
}

// Xử lý sự kiện mở card
function flipCard(card) {
    if (lockBoard) {
        return;
    }
    //so we can not click twice on the same card
    if (card === firstCard) {
        return;
    }

    card.classList.toggle('flip');

    // Khi click CARD đầu tiên
    if (!firstCard) {
        firstCard = card;
        return;
    }

    // Khi click CARD thứ 2
    secondCard = card;
    checkForMatch();

    // Update step
    updateStep();
}

function checkForMatch() {
    // Kiểm tra xem NAME của 2 CARD có giống nhau không?
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    // isMatch = true => xóa sự kiện click ở 2 CARD đó
    // isMatch = false => úp CARD xuống
    isMatch ? disableCards() : unflipCards();
}

// it's a match!
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

    score++;
    checkWin();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

function checkWin() {
    if (score == level) {
        clearInterval(interval);

        setTimeout(() => {
            gameEl.style.display = 'none';
            endGameEl.style.display = 'flex';

            updateEndGame();
        }, 1500);
    }
}

function updateTime() {
    time++;
    timeEl.innerText = convertTime(time);
}

function convertTime(time) {
    let minute = `0${Math.floor(time / 60)}`.slice(-2);
    let second = `0${time % 60}`.slice(-2);
    return `${minute}:${second}s`;
}

function updateStep() {
    step++;
    stepEl.innerText = `${step} bước`;
}

function updateEndGame() {
    document.querySelector('.time-box p').innerText = convertTime(time);
    document.querySelector('.step-box p').innerText = `${step} bước`
}

btnStartGame.addEventListener('click', function () {
    // Lấy giá trị level game
    level = Number(levelOptionEl.value);

    // Ẩn START => show GAME
    startGameEl.style.display = 'none';
    gameEl.style.display = 'flex';

    // Khởi tạo game (render card)
    renderCards(level);

    // Chạy thời gian
    interval = setInterval(updateTime, 1000);
});

btnPlayAgain.addEventListener('click', function () {
    // Reset điểm về 0
    score = 0;
    time = 0;
    step = 0;

    timeEl.innerText = convertTime(time);
    stepEl.innerText = `${step} bước`;

    // Chạy thời gian
    interval = setInterval(updateTime, 1000);

    // Dựa vào level đã có => khởi tạo game
    renderCards(level);

    // Ẩn END => show GAME
    endGameEl.style.display = 'none';
    gameEl.style.display = 'flex';
});

btnReload.addEventListener('click', function () {
    window.location.reload();
});