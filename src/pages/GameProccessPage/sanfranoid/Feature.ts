import { FeatureOptions } from './types'
import { Color } from './settings'

export abstract class Feature {
  protected _ctx: CanvasRenderingContext2D

  protected _canvas

  protected _color = Color.Blue

  protected _x = 0

  protected _y = 0

  get x() {
    return this._x
  }

  set x(value) {
    this._x = value
  }

  get y() {
    return this._y
  }

  set y(value) {
    this._y = value
  }

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    this._canvas = canvas
    const ctx = this._canvas.getContext('2d')

    if (ctx) {
      this._ctx = ctx
    } else {
      throw new Error('Не удалось получить 2D контекст')
    }

    if (options) {
      const { color = this._color, x = this._x, y = this._y } = options
      this._color = color
      this._x = x
      this._y = y
    }
  }

  public abstract draw(x?: number, y?: number): void

  public setColor(color: Color) {
    this._color = color
  }
}
