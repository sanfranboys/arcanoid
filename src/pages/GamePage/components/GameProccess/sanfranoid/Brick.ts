import { Feature } from './Feature'
import { BrickOptions } from './types'

export enum Status {
  Destroyed,
  Exist,
}

export class Brick extends Feature {
  height = 20

  width = 75

  status = Status.Exist

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    if (options) {
      const { height = this.height, width = this.width } = options
      this.height = height
      this.width = width
    }
  }

  draw(x: number, y: number) {
    const { ctx, height, width, color } = this

    this.x = x
    this.y = y

    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  isExist() {
    return this.status === Status.Exist
  }

  destroy() {
    this.status = Status.Destroyed
  }

  isCrossedBy(feature: Feature) {
    const { x, y, width, height } = this
    return (
      feature.x > x &&
      feature.x < x + width &&
      feature.y > y &&
      feature.y < y + height
    )
  }
}
