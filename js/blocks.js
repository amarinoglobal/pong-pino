class Block {

    constructor(ctx, blockPosX, blockPosY, blockWidth, blockHeight, blockImg, canvasSize) {
        this.ctx = ctx
        this.blockPos = { x: blockPosX, y: blockPosY }
        this.blockSize = { w: blockWidth, h: blockHeight }
        this.blockImage = blockImg
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.blockImage}`
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
    }
}