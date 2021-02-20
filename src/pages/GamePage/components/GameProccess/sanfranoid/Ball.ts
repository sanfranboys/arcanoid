import { Feature } from './Feature'
import { FeatureOptions } from './types'

const startDx = 3
const startDy = -3

export class Ball extends Feature {
  radius = 10

  dx = startDx

  dy = startDy

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this.setStartPosition()
  }

  draw() {
    const { ctx, radius, color, dx, dy, x, y } = this

    if (!ctx) {
      return
    }

    this.x += dx
    this.y += dy

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  changeXDirection() {
    this.dx = -this.dx
  }

  changeYDirection() {
    this.dy = -this.dy
  }

  moveRight() {
    this.dy = startDy
    this.dx = startDx
  }

  moveLeft() {
    this.dy = startDy
    this.dx = -startDx
  }

  crossedRightOrLeft() {
    const { x, dx, canvas, radius } = this
    return x + dx > canvas.width - radius || x + dx < radius
  }

  crossedTop() {
    const { y, dy, radius } = this
    return y + dy < radius
  }

  crossedBottom() {
    const { y, dy, radius, canvas } = this
    return y + dy > canvas.height - radius
  }

  setStartPosition() {
    this.x = this.canvas.width / 2
    this.y = this.canvas.height - 30
    this.dx = startDx
    this.dy = startDy
  }
}
