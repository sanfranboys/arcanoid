import { Feature } from './Feature'
import { Color } from './settings'

export class Score extends Feature {
  private _count = 0

  protected _x = 70

  protected _y = 20

  protected _color = Color.White

  public draw() {
    const { _ctx, _count, _color, _x, _y } = this

    _ctx.font = '16px Arial'
    _ctx.fillStyle = _color
    _ctx.fillText(`Score: ${_count}`, _x, _y)
  }

  public getScore() {
    return this._count
  }

  public increase() {
    this._count += 1
  }
}
