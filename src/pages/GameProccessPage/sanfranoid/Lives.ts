import { Feature } from './Feature'
import { FeatureOptions } from './types'
import { Color, lives } from './settings'

export class Lives extends Feature {
  private _count = lives

  protected _y = 20

  protected _color = Color.White

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this._x = canvas.width - 65
  }

  public draw() {
    const { _ctx, _count, _color, _x, _y } = this

    _ctx.font = '16px Arial'
    _ctx.fillStyle = _color
    _ctx.fillText(`Lives: ${_count}`, _x, _y)
  }

  public decrease() {
    this._count -= 1
  }

  public isOver() {
    return this._count === 0
  }

  public isLow() {
    return this._count === 2
  }

  public isCritical() {
    return this._count === 1
  }
}
