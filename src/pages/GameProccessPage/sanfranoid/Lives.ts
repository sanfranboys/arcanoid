import { Feature } from './Feature'
import { FeatureOptions } from './types'

export class Lives extends Feature {
  private count = 3

  public y = 20

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.x = canvas.width - 65
  }

  public draw() {
    const { ctx, count, color, x, y } = this

    ctx.font = '16px Arial'
    ctx.fillStyle = color
    ctx.fillText(`Lives: ${count}`, x, y)
  }

  public decrease() {
    this.count -= 1
  }

  public isOver() {
    return this.count === 0
  }

  public isLow() {
    return this.count === 2
  }

  public isCritical() {
    return this.count === 1
  }
}
