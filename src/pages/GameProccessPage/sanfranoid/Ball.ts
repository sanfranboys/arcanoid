import { Feature } from './Feature'
import { FeatureOptions } from './types'

const startDx = 3
const startDy = -3

export class Ball extends Feature {
  private radius = 10

  private dx = startDx

  private dy = startDy

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.setStartPosition()
  }

  public draw() {
    const { ctx, radius, color, dx, dy, x, y } = this

    this.x += dx
    this.y += dy

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  public changeXDirection() {
    this.dx = -this.dx
  }

  public changeYDirection() {
    this.dy = -this.dy
  }

  public moveRight() {
    this.dy = startDy
    this.dx = startDx
  }

  public moveLeft() {
    this.dy = startDy
    this.dx = -startDx
  }

  public crossedRightOrLeft() {
    const { x, dx, canvas, radius } = this
    return x + dx > canvas.width - radius || x + dx < radius
  }

  public crossedTop() {
    const { y, dy, radius } = this
    return y + dy < radius
  }

  public crossedBottom() {
    const { y, dy, radius, canvas } = this
    return y + dy > canvas.height - radius
  }

  public setStartPosition() {
    this.x = this.canvas.width / 2
    this.y = this.canvas.height - 30
    this.dx = startDx
    this.dy = startDy
  }
}
