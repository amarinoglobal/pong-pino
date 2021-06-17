class Time {
    constructor(ctx, timePosX, timePosY, timeSeconds) {
        this.timeSeconds = timeSeconds
        this.timePosX = timePosX
        this.timePosY = timePosY
        this.ctx = ctx
        this.init()
    }
    init() {
    }
    createTime() {
        setInterval(() => {
            this.timeSeconds -= 1
        }, 1000)
    }
    draw() {
        this.ctx.font = "30px Arial"
        this.ctx.font
        this.ctx.fillText(this.timeSeconds, this.timePosX, this.timePosY)
    }
}



