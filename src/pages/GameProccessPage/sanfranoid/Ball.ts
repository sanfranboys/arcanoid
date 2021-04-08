import { Feature } from './Feature'
import { FeatureOptions } from './types'
import { ballSpeed, ballRadius, ballImg } from './settings'

export class Ball extends Feature {
  private _radius = ballRadius

  private _dx = ballSpeed

  private _dy = -ballSpeed

  private el:HTMLImageElement

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.setStartPosition()
    this.el = new Image()
    this.el.src = ballImg
  }

  public draw() {
    const { _ctx, _radius, _dx, _dy, _x, _y } = this

    this._x += _dx
    this._y += _dy

    _ctx.drawImage(this.el, _x - 9, _y - 9, 22, 22)
    _ctx.beginPath()
    _ctx.arc(_x, _y, _radius, 0, Math.PI * 2)
    _ctx.closePath()
  }

  public changeXDirection() {
    this._dx = -this._dx
  }

  public changeYDirection() {
    this._dy = -this._dy
  }

  public moveRight() {
    this._dy = -ballSpeed
    this._dx = ballSpeed
  }

  public moveLeft() {
    this._dy = -ballSpeed
    this._dx = -ballSpeed
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
    this._dx = ballSpeed
    this._dy = -ballSpeed
  }
}
