import { FeatureOptions } from './types'
import { Color } from './colors'

export abstract class Feature {
  protected ctx: CanvasRenderingContext2D

  protected canvas

  protected color = Color.Blue

  public x = 0

  public y = 0

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    this.canvas = canvas
    const ctx = this.canvas.getContext('2d')

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error('Не удалось получить 2D контекст')
    }

    if (options) {
      const { color = this.color, x = this.x, y = this.y } = options
      this.color = color
      this.x = x
      this.y = y
    }
  }

  public abstract draw(x?: number, y?: number): void

  public setColor(color: Color) {
    this.color = color
  }
}
