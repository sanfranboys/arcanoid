import { Brick } from './Brick'
import { Feature } from './Feature'
import { FeatureOptions } from './types'

export class Wall extends Feature {
  private rowCount = 3

  private columnCount = 5

  private padding = 10

  private offsetTop = 30

  private offsetLeft = 30

  private bricksWidth = 75

  private bricksHeight = 20

  private bricks: Brick[][] = []

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.calculateBrick()
    this.createBricks()
  }

  public eachBrick(
    callback: (brick: Brick, rowIdx: number, colIdx: number) => void
  ) {
    this.bricks.forEach((row, rowIdx) => {
      row.forEach((brick, colIdx) => {
        if (typeof callback === 'function') {
          callback(brick, rowIdx, colIdx)
        }
      })
    })
  }

  public draw() {
    const { offsetLeft, offsetTop, padding } = this

    this.eachBrick((brick, rowIdx, colIdx) => {
      if (brick.isExist()) {
        const { width, height } = brick
        const x = colIdx * (width + padding) + offsetLeft
        const y = rowIdx * (height + padding) + offsetTop

        brick.setColor(this.color)
        brick.draw(x, y)
      }
    })
  }

  public createBricks() {
    this.bricks = Array.from(Array(this.rowCount), () => this.createRow())
  }

  private createRow() {
    return Array.from(
      Array(this.columnCount),
      () =>
        new Brick(this.canvas, {
          width: this.bricksWidth,
          height: this.bricksHeight,
        })
    )
  }

  public isDestroyed() {
    return this.bricks.every((row) => row.every((brick) => !brick.isExist()))
  }

  private calculateBrick() {
    const freeXSpace = this.canvas.width - this.offsetLeft * 2 + this.padding
    const brickWidthSpace = this.bricksWidth + this.padding
    this.columnCount = Math.ceil(freeXSpace / brickWidthSpace)
    const diffX = freeXSpace - this.columnCount * brickWidthSpace
    this.bricksWidth += Math.ceil(diffX / this.columnCount)

    const freeYSpace = Math.ceil(
      (this.canvas.height - this.offsetTop * 2 + this.padding) / 2
    )
    const brickHeightSpace = this.bricksHeight + this.padding
    this.rowCount = Math.ceil(freeYSpace / brickHeightSpace)
    const diffY = freeYSpace - this.rowCount * brickHeightSpace
    this.bricksHeight += Math.ceil(diffY / this.rowCount)
  }
}
