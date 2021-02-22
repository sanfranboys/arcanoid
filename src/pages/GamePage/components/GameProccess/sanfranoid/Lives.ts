import { Feature } from './Feature'
import { FeatureOptions } from './types'

export class Lives extends Feature {
  count = 3

  y = 20

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.x = canvas.width - 65
  }

  draw() {
    const { ctx, count, color, x, y } = this

    ctx.font = '16px Arial'
    ctx.fillStyle = color
    ctx.fillText(`Lives: ${count}`, x, y)
  }

  decrease() {
    this.count -= 1
  }

  isOver() {
    return this.count === 0
  }

  isLow() {
    return this.count === 2
  }

  isCritical() {
    return this.count === 1
  }
}
