import { Brick } from './Brick'
import { Feature } from './Feature'
import { BrickOptions } from './types'
import { paddleHeight, paddleWidth } from './settings'

export class Paddle extends Brick {
  protected _height = paddleHeight

  protected _width = paddleWidth

  private _dx = 7

  private _rightPressed = false

  private _leftPressed = false

  private _speed = 0

  private _time: number

  private _lastX: number

  get speed() {
    return this._speed
  }

  set speed(value) {
    this._speed = value
  }

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    this.setStartPosition()

    document.addEventListener('keydown', this.keyDownHandler, false)
    document.addEventListener('keyup', this.keyUpHandler, false)
    document.addEventListener('mousemove', this.mouseMoveHandler, false)
  }

  public destroy() {
    document.removeEventListener('keydown', this.keyDownHandler, false)
    document.removeEventListener('keyup', this.keyUpHandler, false)
    document.removeEventListener('mousemove', this.mouseMoveHandler, false)
  }

  public draw() {
    const { _dx } = this

    if (this.isNotCrossedRight()) {
      this._x += _dx
    } else if (this.isNotCrossedLeft()) {
      this._x -= _dx
    }

    super.draw(this._x, this._y)
  }

  private keyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this._rightPressed = true
    } else if (e.keyCode === 37) {
      this._leftPressed = true
    }
  }

  private keyUpHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this._rightPressed = false
    } else if (e.keyCode === 37) {
      this._leftPressed = false
    }
  }

  private mouseMoveHandler = (e: MouseEvent) => {
    const { _canvas, _width, _lastX, _x } = this
    const canvasOffsetLeft =
      _canvas.getBoundingClientRect().left + document.body.scrollLeft
    const relativeX = e.clientX - canvasOffsetLeft

    if (relativeX > 0 && relativeX < _canvas.width) {
      this._x = relativeX - _width / 2
    }

    this.withTime((time) => {
      const dx = _x - _lastX
      this.speed = Math.round((dx / time) * 100)
      this._lastX = _x
    })
  }

  private withTime(callback: (time: number) => void) {
    const { _time } = this

    if (_time === null) {
      this._time = Date.now()
      return
    }

    const now = Date.now()
    const dTime = now - _time

    if (typeof callback === 'function') {
      callback(dTime)
    }

    this._time = now
  }

  public isCrossedBy(feature: Feature) {
    const { _x, _width } = this
    return feature.x > _x && feature.x < _x + _width
  }

  public setStartPosition() {
    this.x = (this._canvas.width - this.width) / 2
    this.y = this._canvas.height - this.height
  }

  private isNotCrossedRight() {
    const { _x, _rightPressed, _width, _canvas } = this
    return _rightPressed && _x < _canvas.width - _width
  }

  private isNotCrossedLeft() {
    const { _leftPressed, _x } = this
    return _leftPressed && _x > 0
  }
}
