
window.onload = () => {
    document.getElementById('start').onclick = () => {
        // startgame = document.querySelector(".startgame"),
        //     start = document.querySelector(".start"),

        //     start.classList.replace("start", "startnone")
        // startgame.classList.replace("startgame", "startgamenone")
        document.getElementById('start').id = 'startnone';
        document.getElementById('startgame').id = 'startgamenone';

        canvasPongpino.init();
    };


};

