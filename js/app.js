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
            e.key === '37' ? this.base1.moveLeft() : null
            e.key === '39' ? this.base1.moveRight() : null
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