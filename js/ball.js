
class Box {
    // constructor(ctx, basePosX, basePosY, baseWidth, baseHeight, baseImg) {
    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, canvasSize, ballImage, base1Pos) {
        this.ctx = ctx
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.canvasSize = canvasSize
        this.ballImage = ballImage
        this.imageInstance = undefined
        this.base1Pos = base1Pos
        this.ballVel = { x: 2, y: 2 }
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


        //this.ballPos.y >= this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        //this.ballPos.x >= this.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null

        // if (this.ballPos.x == this.base1Pos.x && this.ballPos.y)
        //     this.ballVel.y *= -1;
        // this.ballVel.x *= -1;

        // else {
        /*this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y*/
        //}
        // console.log(this.base1Pos.x)
        // if (this.ballPos.x < this.base1Pos.x + this.base1Pos.width && this.ballPos.x + this.ballPos.width > this.base1Pos.x && this.ballPos.y < this.base1Pos.y + this.base1Pos.height && this.ballPos.height + this.ballPos.y > this.base1Pos.y) {
        //     this.ballVel.y *= -1;
        //     this.ballVel.x *= -1;
        // }

        //   this.ballPos.y >= canvasPongpino.basePos.y - this.ballSize.h ? this.ballVel.y *= -1 : null
        // this.ballPos.x >= canvasPongpino.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
    }

}