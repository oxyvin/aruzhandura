const messages = [
    "пидора ответ",
    "ты уверен?",
    "может все же согласишься",
    "согласись все таки аружан дура",
    "ну нажми дааааа!",
    "хуесос нажми на да",
    "ну пожалуйстааааааааааааааа нажми да",
    "пжпжпжпжпж нажми на да",
    "ты точно не согласен что аружан дура?",
    "ради меня нажми на да❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}