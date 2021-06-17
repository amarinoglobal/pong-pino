class CreatorBase1 {

    constructor(ctx, base1PosX, base1PosY, base1Width, base1Height, baseImg, canvasSize) {
        this.ctx = ctx
        this.base1Pos = { x: base1PosX, y: base1PosY }
        this.base1Size = { w: base1Width, h: base1Height }
        this.baseImage = baseImg
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.init()


    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.baseImage}`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.base1Pos.x, this.base1Pos.y, this.base1Size.w, this.base1Size.h)
    }

    moveLeft() {

        this.base1Pos.x > 0 ? this.base1Pos.x -= 25 : this.base1Pos.x -= 0

    }


    moveRight() {

        this.base1Pos.x < (canvasPongpino.canvasSize.w - 140) ? this.base1Pos.x += 25 : this.base1Pos.x += 0


    }
}


class CreatorBase2 {

    constructor(ctx, base2PosX, base2PosY, base2Width, base2Height, baseImg, canvasSize) {
        this.ctx = ctx
        this.base2Pos = { x: base2PosX, y: base2PosY }
        this.base2Size = { w: base2Width, h: base2Height }
        this.baseImage = baseImg
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.baseImage}`

    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.base2Pos.x, this.base2Pos.y, this.base2Size.w, this.base2Size.h)
    }

    moveUp() {

        this.base2Pos.y > 5 ? this.base2Pos.y -= 25 : this.base2Pos.y -= 0

    }

    moveDown() {
        (this.base2Pos.y + 130) < canvasPongpino.canvasSize.h ? this.base2Pos.y += 25 : this.base2Pos.y -= 0

    }

}