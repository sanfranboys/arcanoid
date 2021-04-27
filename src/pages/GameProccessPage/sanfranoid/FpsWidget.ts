import { Feature } from './Feature'
import { Color } from './settings'
import { Fps } from './Fps'
import { BrickOptions } from './types'

export class FpsWidget extends Feature {
  protected _x = 8

  protected _y = 20

  protected _color = Color.White

  private _fps: Fps

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    this._fps = new Fps()
    this._fps.start()
  }

  public draw() {
    const { _ctx, _color, _x, _y } = this

    _ctx.font = '16px Arial'
    _ctx.fillStyle = _color
    _ctx.fillText(`Fps: ${this._fps.value} `, _x, _y)
  }
}
