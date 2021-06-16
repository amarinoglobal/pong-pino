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
    block1: undefined,
    table:
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            // [4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 1, 1, 1],
        ],

    target: [],
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
            this.colision()


        }, 1000 / 90)
    },


    createbase() {
        this.base1 = new CreatorBase1(this.ctx, (this.canvasSize.w / 2) - 65, this.canvasSize.h - 60, 130, 34, 'base1.png')
        this.base2 = new CreatorBase2(this.ctx, 20, (this.canvasSize.h / 2) - 65, 34, 130, 'base2.png')
        this.base3 = new CreatorBase1(this.ctx, (this.canvasSize.w / 2) - 65, 20, 130, 34, 'base3.png')
        this.base4 = new CreatorBase2(this.ctx, this.canvasSize.w - 65, (this.canvasSize.h / 2) - 65, 34, 130, 'base4.png')
        this.box = new Box(this.ctx, (this.canvasSize.w / 2) + 350, 30, 30, 30, this.canvasSize, 'ball.png')
        this.block1 = new Block(this.ctx, (this.canvasSize.w / 2) - 400, (this.canvasSize.h / 2) - 250, 50, 50, 'block.png')
        this.block2 = new Block(this.ctx, (this.canvasSize.w / 2) - 400, (this.canvasSize.h / 2) + 200, 50, 50, 'block.png')
        this.block3 = new Block(this.ctx, (this.canvasSize.w / 2) + 350, (this.canvasSize.h / 2) - 250, 50, 50, 'block.png')
        this.block4 = new Block(this.ctx, (this.canvasSize.w / 2) + 350, (this.canvasSize.h / 2) + 200, 50, 50, 'block.png')

    },

    createTargets() {

        this.table.[0]forEach(function (ele) {

            let x = (this.canvasSize.w / 2) - 350

            if (ele == 1) {
                this.block + [ele] = new Block(this.ctx, x, (this.canvasSize.h / 2) - 250, 'block.png')
                x += 50
            }))


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
        this.block1.draw()
        this.block2.draw()
        this.block3.draw()
        this.block4.draw()

    },

    colision() {


        if (
            (this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
                this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
                this.box.ballPos.x + this.box.ballSize.w < this.base1.base1Pos.x + this.base1.base1Size.w
            ) ||

            (this.box.ballPos.y < this.base3.base1Pos.y + this.base3.base1Size.h &&
                this.box.ballPos.x + this.box.ballSize.w > this.base3.base1Pos.x &&
                this.box.ballPos.x + this.box.ballSize.w < this.base3.base1Pos.x + this.base3.base1Size.w
            )

        ) {

            this.box.ballVel.y *= -1
        }

        if ((this.box.ballPos.x < this.base2.base2Pos.x + this.base2.base2Size.w &&
            this.box.ballPos.y + this.box.ballSize.h > this.base2.base2Pos.y &&
            this.box.ballPos.y + this.box.ballSize.h < this.base2.base2Pos.y + this.base2.base2Size.h
        ) ||
            (this.box.ballPos.x + this.box.ballSize.w > this.base4.base2Pos.x &&
                this.box.ballPos.y + this.box.ballSize.h > this.base4.base2Pos.y &&
                this.box.ballPos.y < this.base4.base2Pos.y + this.base4.base2Size.h
            )


        ) {


            this.box.ballVel.x *= -1

        }

        //------------------------------------------------------------------------
        //             Colision bloques
        if ((this.box.ballPos.x < this.block1.blockPos.x + this.block1.blockSize.w &&
            this.box.ballPos.x + this.box.ballSize.w > this.block1.blockPos.x &&
            this.box.ballPos.y + this.box.ballSize.h > this.block1.blockPos.y &&
            this.box.ballPos.y < this.block1.blockPos.y + this.block1.blockSize.h) ||
            (this.box.ballPos.x < this.block2.blockPos.x + this.block2.blockSize.w &&
                this.box.ballPos.x + this.box.ballSize.w > this.block2.blockPos.x &&
                this.box.ballPos.y + this.box.ballSize.h > this.block2.blockPos.y &&
                this.box.ballPos.y < this.block2.blockPos.y + this.block2.blockSize.h) ||

            (this.box.ballPos.x < this.block3.blockPos.x + this.block3.blockSize.w &&
                this.box.ballPos.x + this.box.ballSize.w > this.block3.blockPos.x &&
                this.box.ballPos.y + this.box.ballSize.h > this.block3.blockPos.y &&
                this.box.ballPos.y < this.block3.blockPos.y + this.block3.blockSize.h) ||
            (this.box.ballPos.x < this.block4.blockPos.x + this.block4.blockSize.w &&
                this.box.ballPos.x + this.box.ballSize.w > this.block4.blockPos.x &&
                this.box.ballPos.y + this.box.ballSize.h > this.block4.blockPos.y &&
                this.box.ballPos.y < this.block4.blockPos.y + this.block4.blockSize.h)

        ) {

            this.box.ballVel.x *= -1
            this.box.ballVel.y *= -1


        }




    }
}

//________________________________________________________________________________

//Logica del if de las bases para la colisión
/*         this.box.ballPos.x < this.base1.base1Pos.x + this.base1.base1Size.w &&
           this.box.ballPos.x + this.box.ballSize.w > this.base1.base1Pos.x &&
           this.box.ballPos.y + this.box.ballSize.h > this.base1.base1Pos.y &&
           this.box.ballPos.y < this.base1.base1Pos.y + this.base1.baseSize.h*/
//________________________________________________________________________________