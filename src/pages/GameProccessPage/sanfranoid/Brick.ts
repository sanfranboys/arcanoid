import { Feature } from './Feature'
import { BrickOptions } from './types'

export enum Status {
  Destroyed,
  Exist,
}

export class Brick extends Feature {
  protected _height = 20

  protected _width = 75

  private _status = Status.Exist

  get height() {
    return this._height
  }

  set height(value) {
    this._height = value
  }

  get width() {
    return this._width
  }

  set width(value) {
    this._width = value
  }

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    if (options) {
      const { height = this._height, width = this._width } = options
      this._height = height
      this._width = width
    }
  }

  public draw(x: number, y: number) {
    const { _ctx, _height, _width, _color } = this

    this._x = x
    this._y = y

    _ctx.beginPath()
    _ctx.rect(x, y, _width, _height)
    _ctx.fillStyle = _color
    _ctx.fill()
    _ctx.closePath()
  }

  public isExist() {
    return this._status === Status.Exist
  }

  public destroy() {
    this._status = Status.Destroyed
  }

  public isCrossedBy(feature: Feature) {
    const { _x, _y, _width, _height } = this
    return (
      feature.x > _x &&
      feature.x < _x + _width &&
      feature.y > _y &&
      feature.y < _y + _height
    )
  }
}
