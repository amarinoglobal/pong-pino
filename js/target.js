
class Target {
    constructor(ctx, targetPosX, targetPosY, canvasSize) {
        this.ctx = ctx
        this.targetPos = { x: targetPosX, y: targetPosY }
        this.targetSize = { w: 50, h: 50 }
        this.targetImage = targetImg
        this.imageInstance = undefined
        this.canvasSize = canvasSize
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.baseImage}`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.targetPos.x, this.targetPos.y, this.targetSize.w, this.targetSize.h)

    }
}

    // class TargetNormal extends Target{
    //     constructor(ctx, targetPosX, targetPosY, canvasSize,blockImg)



    //     draw() {
    //         this.ctx.drawImage(this.imageInstance, this.targetPos.x, this.base1Pos.y, this.base1Size.w, this.base1Size.h)
    //     }




    //}
        // CREATE THE BRICKS
        // const brick = {
        //     row: 1,
        //     column: 5,
        //     width: 55,
        //     height: 20,
        //     offSetLeft: 20,
        //     offSetTop: 20,
        //     marginTop: 40,
        //     fillColor: "#2e3548",
        //     strokeColor: "#FFF"
        // }


        // const tablero = [
        //     [0, 1, 2, 3, 4],
        //     [1, 0]]

        // init() {
        //     mezclar arrays()
        // }

        // tablero.forEach((fila) => {
        //     fila.forEach(celdra)=> {
        //         if (celda === 1) create new Target()
        //         if (celda == 2) create new LifeTarget()
        //     }
        // })


// class Target {
//     constructor(ctx, targetPosX, targetPosY, targetW, targetH, targetRow, targetColumn, targetMargin, targetFillColor, targetStrokeColor, targetOffSetLeft, targetOffSetTop) {
//         this.ctx = ctx
//         this.targetW = 55
//         this.targetH = 20
//         this.targetPos = { x: targetPosX, y: targetPosY }
//         this.targetRow = 1
//         this.targetColumn = 5
//         this.targetOffSetLeft = 20
//         this.targetOffSetTop = 20
//         this.targetMarginTop = 40
//         this.targetFillColor = "#2E3548"
//         this.targetStrokeColor = "#FFF"
//     }
//     createtarget() {
//         for (let r = 0; r < this.targetRow; r++) {
//             target[r] = []
//             for (let c = 0; c < this.targetColumn; c++) {
//                 target[r][c] = {
//                     x: c * (this.targetOffSetLeft + this.targetSize.w) + this.targetOffSetLeft,
//                     y: r * (this.targetOffSetTop + this.targetH) + this.targetOffSetTopthis.targetOffSetTop + this.targetMarginTop,
//                     status: true
//                 }
//             }
//         }
//     }
//     drawTargets() {
//     }
// }

// class Block {

//     constructor(ctx, blockPosX, blockPosY, blockWidth, blockHeight, blockImg, canvasSize) {
//         this.ctx = ctx
//         this.blockPos = { x: blockPosX, y: blockPosY }
//         this.blockSize = { w: blockWidth, h: blockHeight }
//         this.blockImage = blockImg
//         this.imageInstance = undefined
//         this.canvasSize = canvasSize
//         this.init()
//     }
//     init() {
//         this.imageInstance = new Image()
//         this.imageInstance.src = `images/${this.blockImage}`
//     }
//     draw() {
//         this.ctx.drawImage(this.imageInstance, this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
//     }
// }