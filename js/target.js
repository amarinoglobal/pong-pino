class Target {
    constructor(ctx, targetPosX, targetPosY, targetW, targetH, targetRow, targetColumn, targetMargin, targetFillColor, targetStrokeColor, targetOffSetLeft, targetOffSetTop) {
        this.ctx = ctx
        this.targetW = 55
        this.targetH = 20
        this.targetPos = { x: targetPosX, y: targetPosY }
        this.targetRow = 1
        this.targetColumn = 5
        this.targetOffSetLeft = 20
        this.targetOffSetTop = 20
        this.targetMarginTop = 40
        this.targetFillColor = "#2E3548"
        this.targetStrokeColor = "#FFF"
    }
    createtarget() {
        for (let r = 0; r < this.targetRow; r++) {
            target[r] = []
            for (let c = 0; c < this.targetColumn; c++) {
                target[r][c] = {
                    x: c * (this.targetOffSetLeft + this.targetSize.w) + this.targetOffSetLeft,
                    y: r * (this.targetOffSetTop + this.targetH) + this.targetOffSetTopthis.targetOffSetTop + this.targetMarginTop,
                    status: true
                }
            }
        }
    }
    drawTargets() {
    }
}

