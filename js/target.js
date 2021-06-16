
class Target {
    constructor(ctx, targetPosX, targetPosY, targetImg, canvasSize) {
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
        this.imageInstance.src = `images/${this.targetImage}`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.targetPos.x, this.targetPos.y, this.targetSize.w, this.targetSize.h)

    }
}





// tablero.forEach((fila) => {
        //     fila.forEach(celdra)=> {
        //         if (celda === 1) create new Target()
        //         if (celda == 2) create new LifeTarget()
        //     }
        // })
// class Random extends Target {
//     constructor() {
//         super()
//     }
//     getRandom() {
//         if (
//             this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
//             this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
//             this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
//             this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h
//         ) {
//             list.sort(() => Math.random() - 0.5)
//         }
//         // const shuffleArray = array => {
//         //     for (let i = array.length - 1; i > 0; i--) {
//         //         const j = Math.floor(Math.random() * (i + 1));
//         //         const temp = array[i];
//         //         array[i] = array[j];
//         //         array[j] = temp;
//         //     }
//         // }
//     }
// }
// class LessTime extends Target {
//     constructor() {
//         super()
//     }
//     lessTime() {
//         if (
//             this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
//             this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
//             this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
//             this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h
//         ) {
//             // 
//         }
//     }
// }
// class MoreTime extends Target {
//     constructor() {
//         super()
//     }
//     moreTime() {
//         if (
//             this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
//             this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
//             this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
//             this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h
//         ) {
//             // 
//         }
//     }
// }
// class MoreSpeed extends Target {
//     constructor() {
//         super()
//     }
//     moreSpeed() {
//         if (
//             this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
//             this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
//             this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
//             this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h
//         ) {
//             // 
//         }
//     }
// }
// class LessSpeed extends Target {
//     constructor() {
//         super()
//     }
//     lessSpeed() {
//         if (
//             this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
//             this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
//             this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
//             this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h
//         ) {
//             // 
//         }
//     }
//---------------------------------------------//}
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

