import { Feature } from './Feature'

export class Score extends Feature {
  count = 0

  x = 8

  y = 20

  draw() {
    const { ctx, count, color, x, y } = this

    if (!ctx) {
      return
    }

    ctx.font = '16px Arial'
    ctx.fillStyle = color
    ctx.fillText(`Score: ${count}`, x, y)
  }

  increase() {
    this.count += 1
  }
}
