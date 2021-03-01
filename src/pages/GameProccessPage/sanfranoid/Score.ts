import { Feature } from './Feature'

export class Score extends Feature {
  private _count = 0

  protected _x = 8

  protected _y = 20

  public draw() {
    const { _ctx, _count, _color, _x, _y } = this

    _ctx.font = '16px Arial'
    _ctx.fillStyle = _color
    _ctx.fillText(`Score: ${_count}`, _x, _y)
  }

  public increase() {
    this._count += 1
  }
}
