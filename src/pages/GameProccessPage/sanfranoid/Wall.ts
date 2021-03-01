import { Brick } from './Brick'
import { Feature } from './Feature'
import { FeatureOptions } from './types'
import {
  brickPadding,
  brickWidth,
  brickHeight,
  brickOffsetLeft,
  brickOffsetTop,
} from './settings'

export class Wall extends Feature {
  private _rowCount = 3

  private _columnCount = 5

  private _padding = brickPadding

  private _offsetTop = brickOffsetTop

  private _offsetLeft = brickOffsetLeft

  private _bricksWidth = brickWidth

  private _bricksHeight = brickHeight

  private _bricks: Brick[][] = []

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.calculateBrick()
    this.createBricks()
  }

  public eachBrick(
    callback: (brick: Brick, rowIdx: number, colIdx: number) => void
  ) {
    this._bricks.forEach((row, rowIdx) => {
      row.forEach((brick, colIdx) => {
        if (typeof callback === 'function') {
          callback(brick, rowIdx, colIdx)
        }
      })
    })
  }

  public draw() {
    const { _offsetLeft, _offsetTop, _padding } = this

    this.eachBrick((brick, rowIdx, colIdx) => {
      if (brick.isExist()) {
        const { width, height } = brick
        const x = colIdx * (width + _padding) + _offsetLeft
        const y = rowIdx * (height + _padding) + _offsetTop

        brick.setColor(this._color)
        brick.draw(x, y)
      }
    })
  }

  public createBricks() {
    this._bricks = Array.from(Array(this._rowCount), () => this.createRow())
  }

  private createRow() {
    return Array.from(
      Array(this._columnCount),
      () =>
        new Brick(this._canvas, {
          width: this._bricksWidth,
          height: this._bricksHeight,
        })
    )
  }

  public isDestroyed() {
    return this._bricks.every((row) => row.every((brick) => !brick.isExist()))
  }

  private calculateBrick() {
    const freeXSpace = this._canvas.width - this._offsetLeft * 2 + this._padding
    const brickWidthSpace = this._bricksWidth + this._padding
    this._columnCount = Math.ceil(freeXSpace / brickWidthSpace)
    const diffX = freeXSpace - this._columnCount * brickWidthSpace
    this._bricksWidth += Math.ceil(diffX / this._columnCount)

    const freeYSpace = Math.ceil(
      (this._canvas.height - this._offsetTop * 2 + this._padding) / 2
    )
    const brickHeightSpace = this._bricksHeight + this._padding
    this._rowCount = Math.ceil(freeYSpace / brickHeightSpace)
    const diffY = freeYSpace - this._rowCount * brickHeightSpace
    this._bricksHeight += Math.ceil(diffY / this._rowCount)
  }
}
