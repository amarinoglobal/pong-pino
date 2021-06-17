
class Box {
    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, canvasSize, ballImage, base1Pos) {
        this.ctx = ctx
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.canvasSize = canvasSize
        this.ballImage = ballImage
        this.imageInstance = undefined
        this.base1Pos = base1Pos
        this.ballVel = { x: ((Math.random() * (3 - 2)) + 2), y: 2 }
        this.ballPhysics = { gravity: 0 }
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.ballImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {

        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y
    }

}