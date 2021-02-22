import { Feature } from './Feature'
import { BrickOptions } from './types'

export enum Status {
  Destroyed,
  Exist,
}

export class Brick extends Feature {
  public height = 20

  public width = 75

  private status = Status.Exist

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    if (options) {
      const { height = this.height, width = this.width } = options
      this.height = height
      this.width = width
    }
  }

  public draw(x: number, y: number) {
    const { ctx, height, width, color } = this

    this.x = x
    this.y = y

    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }

  public isExist() {
    return this.status === Status.Exist
  }

  public destroy() {
    this.status = Status.Destroyed
  }

  public isCrossedBy(feature: Feature) {
    const { x, y, width, height } = this
    return (
      feature.x > x &&
      feature.x < x + width &&
      feature.y > y &&
      feature.y < y + height
    )
  }
}
