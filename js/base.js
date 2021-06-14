class base1 {

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
        this.imageInstance.src = `images/base1.png`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.base1Pos.x, this.base1Pos.y, this.base1Size.w, this.base1Size.h)
    }

    moveLeft() {

        this.base1Pos.x > 0 ? this.base1Pos.x -= 10 : this.base1Pos.x -= 0

    }


    moveRight() {

        this.base1Pos.x < (canvasPongpino.canvasSize.w - 140) ? this.base1Pos.x += 10 : this.base1Pos.x += 0
    }
}


class base2 {

    constructor(ctx, basePosX, basePosY, baseWidth, baseHeight, baseImg, canvasSize) {
        this.ctx = ctx
        this.basePos = { x: basePosX, y: basePosY }
        this.baseSize = { w: baseWidth, h: baseHeight }
        this.baseImage = baseImg
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/base2.png`

    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.basePos.x, this.basePos.y, this.baseSize.w, this.baseSize.h)
    }

    moveUp() {

        this.basePos.y > 5 ? this.basePos.y -= 10 : this.basePos.y -= 0

    }

    moveDown() {
        (this.basePos.y + 130) < canvasPongpino.canvasSize.h ? this.basePos.y += 10 : this.basePos.y -= 0

    }

}

class base3 {

    constructor(ctx, basePosX, basePosY, baseWidth, baseHeight, baseImg) {
        this.ctx = ctx
        this.basePos = { x: basePosX, y: basePosY }
        this.baseSize = { w: baseWidth, h: baseHeight }
        this.baseImage = baseImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/base3.png`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.basePos.x, this.basePos.y, this.baseSize.w, this.baseSize.h)
    }

    moveLeft() {

        this.basePos.x > 5 ? this.basePos.x -= 10 : this.basePos.x -= 0

    }


    moveRight() {

        this.basePos.x < (canvasPongpino.canvasSize.w - 140) ? this.basePos.x += 10 : this.basePos.x += 0
    }
}
class base4 {

    constructor(ctx, basePosX, basePosY, baseWidth, baseHeight, baseImg) {
        this.ctx = ctx
        this.basePos = { x: basePosX, y: basePosY }
        this.baseSize = { w: baseWidth, h: baseHeight }
        this.baseImage = baseImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/base4.png`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.basePos.x, this.basePos.y, this.baseSize.w, this.baseSize.h)
    }

    moveUp() {

        this.basePos.y > 5 ? this.basePos.y -= 10 : this.basePos.y -= 0

    }

    moveDown() {
        (this.basePos.y + 130) < canvasPongpino.canvasSize.h ? this.basePos.y += 10 : this.basePos.y -= 0

    }
}