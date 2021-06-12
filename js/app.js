const canvasPongpino = {
    name: 'Pong-pino app',
    description: 'Canvas breakout 4 sides app',
    version: '1.0.0',
    author: 'Alexander Marino & Samuel Gallego',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    base1: undefined,
    base2: undefined,
    base3: undefined,
    base4: undefined,
    box: [],
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.setContext()
        this.setDimensions()
        this.start()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')

    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth - 5
        this.canvasSize.h = window.innerHeight - 5
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.base1.moveLeft() : null
            e.key === 'ArrowRight' ? this.base1.moveRight() : null
            e.key === 'ArrowUp' ? this.base2.moveUp() : null
            e.key === 'ArrowDown' ? this.base2.moveDown() : null
            e.key === 'ArrowLeft' ? this.base3.moveLeft() : null
            e.key === 'ArrowRight' ? this.base3.moveRight() : null
            e.key === 'ArrowUp' ? this.base4.moveUp() : null
            e.key === 'ArrowDown' ? this.base4.moveDown() : null
            e.key === 'Space' ? this.box.move() : null
            //document.onkeydown = e => e.code === this.keys.SPACE ? this.createBox() : null
        }
    },
    start() {
        this.createbase()


        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.box.move()

        }, 70)
    },


    createbase() {
        this.base1 = new base1(this.ctx, (this.canvasSize.w / 2) - 65, this.canvasSize.h - 60, 130, 34, 'base1.png')
        this.base2 = new base2(this.ctx, 20, (this.canvasSize.h / 2) - 65, 34, 130, 'base2.png')
        this.base3 = new base3(this.ctx, (this.canvasSize.w / 2) - 65, 20, 130, 34, 'base3.png')
        this.base4 = new base4(this.ctx, this.canvasSize.w - 65, (this.canvasSize.h / 2) - 65, 34, 130, 'base4.png')
        this.box = new Box(this.ctx, ((this.canvasSize.w - 20) / 2), 50, 30, 30, this.canvasSize, 'box.png')
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {

        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect((this.canvasSize.w / 2) - 350, (this.canvasSize.h / 2) - 200, 700, 400);
        // this.ctx.fillStyle = "white";
        // this.ctx.fillRect(60, 0, 10, 700);
        // this.ctx.fillRect(430, 0, 10, 700);

        // this.ctx.beginPath();

        // this.ctx.lineWidth = 10
        // this.ctx.strokeStyle = 'white';
        // this.ctx.setLineDash([30, 30]);
        // this.ctx.moveTo(250, 700);
        // this.ctx.lineTo(250, 0);
        // this.ctx.stroke();
        this.base1.draw()
        this.base2.draw()
        this.base3.draw()
        this.base4.draw()
        this.box.draw()
    },


}

class base1 {

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
        this.imageInstance.src = `images/base1.png`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.basePos.x, this.basePos.y, this.baseSize.w, this.baseSize.h)
    }

    moveLeft() {

        this.basePos.x > 0 ? this.basePos.x -= 10 : this.basePos.x -= 0

    }


    moveRight() {

        this.basePos.x < (canvasPongpino.canvasSize.w - 140) ? this.basePos.x += 10 : this.basePos.x += 0
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

class Box {
    // constructor(ctx, basePosX, basePosY, baseWidth, baseHeight, baseImg) {
    constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, canvasSize, ballImage, basePos) {
        this.ctx = ctx
        this.ballSize = { w: ballWidth, h: ballHeight }
        this.ballPos = { x: ballPosX, y: ballPosY }
        this.canvasSize = canvasSize
        this.ballImage = ballImage
        this.imageInstance = undefined
        this.basePos = basePos
        this.ballVel = { x: 2, y: 1 }
        this.ballPhysics = { gravity: .5 }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/box.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y

        if (this.ballPos.x < this.basePos.x + this.basePos.width && this.ballPos.x + this.ballPos.width > this.basePos.x && this.ballPos.y < this.basePos.y + this.basePos.height && this.ballPos.height + this.ballPos.y > this.basePos.y) {
            this.ballVel.y *= -1;
            this.ballVel.x *= -1;
        }

        //   this.ballPos.y >= canvasPongpino.basePos.y - this.ballSize.h ? this.ballVel.y *= -1 : null
        // this.ballPos.x >= canvasPongpino.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
    }
}