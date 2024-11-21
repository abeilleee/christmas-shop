const DAYS = document.querySelector('.timer__days');
const HOURS = document.querySelector('.timer__hours');
const MINUTES = document.querySelector('.timer__minutes');
const SECONDS = document.querySelector('.timer__seconds');

document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date(2024, 12, 0o1);
    let timerON = '';

    const timer = () => {
        let diff = deadline - new Date();
        diff = diff + 10800000;
        if (diff <= 0) {
            clearInterval(timerID);
        }

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        DAYS.innerHTML = `<h2 class="title2">${days}</h2>
        <h4 class="title4 title4--white">days</h4>`;
        HOURS.innerHTML = `<h2 class="title2">${hours}</h2>
        <h4 class="title4 title4--white">hours</h4>`;
        MINUTES.innerHTML = `<h2 class="title2">${minutes}</h2>
        <h4 class="title4 title4--white">minutes</h4>`;
        SECONDS.innerHTML = `<h2 class="title2">${seconds}</h2>
        <h4 class="title4 title4--white">seconds</h4>`;
    }

    timer();
    timerON = setInterval(timer, 1000);
}
)
