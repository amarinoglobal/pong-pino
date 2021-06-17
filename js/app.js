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
    targets: [],
    box: [],
    block1: undefined,
    framesCounter: 0,
    background: undefined,


    table:


        [
            [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1],
            [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1],
            [1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 1, 1, 1, 3, 1, 1, 2, 1, 1, 3, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]


            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            // [4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 1, 1, 1],
        ],




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


        document.onkeydown = e => {
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
        this.reset()
        this.shuffle(this.table)
        this.createbase()
        this.generateTargets()

        this.setListeners()

        this.interval = setInterval(() => {
            this.framesCounter > 50 ? this.framesCounter = 0 : this.framesCounter++

            this.clearScreen()

            this.drawAll()
            this.box.move()
            this.colision()
            this.colisionBlock()
            this.ballOut() ? this.gameOver() : null





        }, 1000 / 100)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "./images/bg.png")


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
        //this.target1 = new Target(this.ctx, (this.canvasSize.w / 2) - 350, (this.canvasSize.h / 2) - 200, 'block.png')



    },



    generateTargets() {
        console.log("lo estoy repetando mas")
        let yTarget = (this.canvasSize.h / 2) - 200
        this.table.forEach((row) => {
            let xTarget = ((this.canvasSize.w / 2) - 350)

            row.forEach((cell) => {



                if (cell === 1) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block.png'))
                    xTarget += 50

                }
                if (cell === 2) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block1.png'))
                    xTarget += 50

                }
                if (cell === 3) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block2.png'))
                    xTarget += 50

                }
                if (cell === 4) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block1.png'))
                    xTarget += 50

                }
                if (cell === 5) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block1.png'))
                    xTarget += 50

                }
                if (cell === 6) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block1.png'))
                    xTarget += 50


                }
                if (cell === 7) {
                    this.targets.push(new Target(this.ctx, xTarget, yTarget, 'block1.png'))
                    xTarget += 50

                }

            })
            yTarget += 50


        })






    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {

        //this.ctx.fillStyle = "black";
        //this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        this.background.draw()
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
        this.targets.forEach((ele) => ele.draw())
        console.log("draw")
    },

    colision() {


        if (
            (this.box.ballPos.y + this.box.ballSize.h >= this.base1.base1Pos.y &&
                this.box.ballPos.x + this.box.ballSize.w >= this.base1.base1Pos.x &&
                this.box.ballPos.x + this.box.ballSize.w <= this.base1.base1Pos.x + this.base1.base1Size.w
            ) ||

            (this.box.ballPos.y <= this.base3.base1Pos.y + this.base3.base1Size.h &&
                this.box.ballPos.x + this.box.ballSize.w >= this.base3.base1Pos.x &&
                this.box.ballPos.x + this.box.ballSize.w < this.base3.base1Pos.x + this.base3.base1Size.w
            )

        ) {

            this.box.ballVel.y *= -1
        }

        if ((this.box.ballPos.x <= this.base2.base2Pos.x + this.base2.base2Size.w &&
            this.box.ballPos.y + this.box.ballSize.h >= this.base2.base2Pos.y &&
            this.box.ballPos.y + this.box.ballSize.h < this.base2.base2Pos.y + this.base2.base2Size.h
        ) ||
            (this.box.ballPos.x + this.box.ballSize.w >= this.base4.base2Pos.x &&
                this.box.ballPos.y + this.box.ballSize.h >= this.base4.base2Pos.y &&
                this.box.ballPos.y <= this.base4.base2Pos.y + this.base4.base2Size.h
            )


        ) {


            this.box.ballVel.x *= -1

        }
    },
    shuffle(array) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    },

    // colisionTarget() {

    //     return this.targets.some((obs) => {


    //         if ((this.box.ballPos.x < this.obs.targetPos.x + this.obs.targetSize.w &&
    //             this.box.ballPos.x + this.box.ballSize.w > this.obs.targetPos.x &&
    //             this.box.ballPos.y + this.box.ballSize.h > this.obs.targetPos.y &&
    //             this.box.ballPos.y < this.obs.targetPos.y + this.obs.targetSize.h) ||
    //             (this.box.ballPos.x < this.obs.targetPos.x + this.obs.targetSize.w &&
    //                 this.box.ballPos.x + this.box.ballSize.w > this.obs.targetPos.x &&
    //                 this.box.ballPos.y + this.box.ballSize.h > this.obs.targetPos.y &&
    //                 this.box.ballPos.y < this.obs.targetPos.y + this.obs.targetSize.h) ||

    //             (this.box.ballPos.x < this.obs.targetPos.x + this.obs.targetSize.w &&
    //                 this.box.ballPos.x + this.box.ballSize.w > this.obs.targetPos.x &&
    //                 this.box.ballPos.y + this.box.ballSize.h > this.obs.targetPos.y &&
    //                 this.box.ballPos.y < this.obs.targetPos.y + this.obs.targetSize.h) ||
    //             (this.box.ballPos.x < this.obs.targetPos.x + this.obs.targetSize.w &&
    //                 this.box.ballPos.x + this.box.ballSize.w > this.obs.targetPos.x &&
    //                 this.box.ballPos.y + this.box.ballSize.h > this.obs.targetPos.y &&
    //                 this.box.ballPos.y < this.obs.targetPos.y + this.obs.targetSize.h)

    //         ) {

    //             this.box.ballVel.x *= -1
    //             this.box.ballVel.y *= -1


    //         }
    //     })



    //------------------------------------------------------------------------
    //             Colision bloques

    colisionBlock() {
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
    },

    ballOut() {
        if (this.box.ballPos.x + this.box.ballSize.w < 0 || this.box.ballPos.y + this.box.ballSize.h < 0 || this.box.ballPos.x > this.canvasSize.w || this.box.ballPos.y > this.canvasSize.h) {
            return true


        }
    },





    gameOver() {


        clearInterval(this.interval)






    },








}
