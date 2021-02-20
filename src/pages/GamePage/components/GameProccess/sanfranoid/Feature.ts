import { FeatureOptions } from './types'
import { Color } from './colors'

export abstract class Feature {
  ctx

  canvas

  color = Color.Blue

  x = 0

  y = 0

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    if (options) {
      const { color = this.color, x = this.x, y = this.y } = options
      this.color = color
      this.x = x
      this.y = y
    }
  }

  abstract draw(x?: number, y?: number): void

  setColor(color: Color) {
    this.color = color
  }
}
