const canvasRacingCar = {
    name: 'Canvas racing car app',
    description: 'Canvas racing car app',
    version: '1.0.0',
    author: 'Alexander Marino',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    car2: undefined,
    car3: undefined,
    car4: undefined,
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
        this.canvasSize.w = window.innerWidth - 20
        this.canvasSize.h = window.innerHeight - 20
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
            e.key === 'ArrowLeft' ? this.car2.moveLeft() : null
            e.key === 'ArrowRight' ? this.car2.moveRight() : null
            e.key === 'ArrowUp' ? this.car3.moveLeft() : null
            e.key === 'ArrowDown' ? this.car3.moveRight() : null
            e.key === 'ArrowUp' ? this.car4.moveLeft() : null
            e.key === 'ArrowDown' ? this.car4.moveRight() : null
        }
    },
    start() {
        this.createcar()
        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
        }, 70)
    },


    createcar() {
        this.car = new car(this.ctx, (this.canvasSize.w / 2) - 65, this.canvasSize.h - 60, 130, 34, 'car.png')
        this.car2 = new car(this.ctx, (this.canvasSize.w / 2) - 65, 20, 130, 34, 'car.png')
        this.car3 = new car2(this.ctx, 65, (this.canvasSize.h / 2) - 65, 34, 130, 'car3.png')
        this.car4 = new car2(this.ctx, this.canvasSize.w - 65, (this.canvasSize.h / 2) - 65, 34, 130, 'car2.png')
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
        this.car.draw()
        this.car2.draw()
        this.car3.draw()
        this.car4.draw()
    }
}



class car {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/car.png`


    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 50
    }

    moveRight() {
        this.carPos.x += 50
    }
}

class car2 {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/car2.png`

    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.y -= 50
    }

    moveRight() {
        this.carPos.y += 50
    }
}