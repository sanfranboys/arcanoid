import { Feature } from './Feature'
import { FeatureOptions } from './types'

const startDx = 3
const startDy = -3

export class Ball extends Feature {
  private _radius = 10

  private _dx = startDx

  private _dy = startDy

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.setStartPosition()
  }

  public draw() {
    const { _ctx, _radius, _color, _dx, _dy, _x, _y } = this

    this._x += _dx
    this._y += _dy

    _ctx.beginPath()
    _ctx.arc(_x, _y, _radius, 0, Math.PI * 2)
    _ctx.fillStyle = _color
    _ctx.fill()
    _ctx.closePath()
  }

  public changeXDirection() {
    this._dx = -this._dx
  }

  public changeYDirection() {
    this._dy = -this._dy
  }

  public moveRight() {
    this._dy = startDy
    this._dx = startDx
  }

  public moveLeft() {
    this._dy = startDy
    this._dx = -startDx
  }

  public crossedRightOrLeft() {
    const { _x, _dx, _canvas, _radius } = this
    return _x + _dx > _canvas.width - _radius || _x + _dx < _radius
  }

  public crossedTop() {
    const { _y, _dy, _radius } = this
    return _y + _dy < _radius
  }

  public crossedBottom() {
    const { _y, _dy, _radius, _canvas } = this
    return _y + _dy > _canvas.height - _radius
  }

  public setStartPosition() {
    this._x = this._canvas.width / 2
    this._y = this._canvas.height - 30
    this._dx = startDx
    this._dy = startDy
  }
}
