import { Feature } from './Feature'
import { FeatureOptions } from './types'
import { Color } from './settings'

export class Pausa extends Feature {
  protected _y = 20

  protected _color = Color.White

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this._x = canvas.width / 2 - 150
    this._y = canvas.height / 2
  }

  public draw() {
    const { _ctx, _color } = this
    _ctx.font = '100px Arial'
    _ctx.fillStyle = _color
    _ctx.fillText(`ПАУЗА`, this._x, this._y)
  }
}
