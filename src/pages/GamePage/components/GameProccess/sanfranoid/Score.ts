import { Feature } from './Feature'

export class Score extends Feature {
  private count = 0

  public x = 8

  public y = 20

  public draw() {
    const { ctx, count, color, x, y } = this

    ctx.font = '16px Arial'
    ctx.fillStyle = color
    ctx.fillText(`Score: ${count}`, x, y)
  }

  public increase() {
    this.count += 1
  }
}
