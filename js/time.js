class Time {
    constructor(timeSeconds, timeIsWaiting, timeIsRunning, timePos, timeSize) {
        this.timeIsWaiting = undefined
        this.timeIsRunning = undefined
        this.timeSeconds = undefined
        this.timePos = { x: timeX, y: timeY }
        this.timeSize = { w: timeW, h: timeH }
        // this.countdownTimer
        // this.finalCountdown = undefined
        this.init()
    }
    init() {
    }
    createTime() {
        let timeSeconds = 300
        // document.getElementById('countdown').innerHTML = totalTime;
        if (totalTime == 0) {
            alert('GameOver')
        } else {
            totalTime -= 1
            setTimeout("updateClock()", 1000)
        }
    }
    drawTime() {
        // var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d")
        ctx.font = "30px Arial"
        // ctx.fillStyle = "yellow"  (esta vacio por dentro)
        ctx.strokeText(this.timeSeconds, 10, 50)
        this.timePos.X = 200
        this.timePos.Y = 200
        this.timePos.W = 200
        this.timePos.H = 200
    }




}