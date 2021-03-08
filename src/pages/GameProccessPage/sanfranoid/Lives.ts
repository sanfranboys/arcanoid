import { Feature } from './Feature'
import { FeatureOptions } from './types'
import { Color, lives } from './settings'

export class Lives extends Feature {
  img: any

  private _count = lives

  protected _y = 5

  protected _color = Color.White

  constructor(canvas: HTMLCanvasElement, options?: FeatureOptions) {
    super(canvas, options)

    this._x = canvas.width - 43
    this.img = new Array(3).fill('').map(() => {
      const el = new Image()
      el.src = '../../../assets/images/heart.png'
      return el
    })
  }

  public draw() {
    const { _ctx, _x, _y } = this
    let position = _x
    this.img.forEach((img: any) => {
      _ctx.drawImage(img, position, _y, 20, 20)
      position -= 25
    })
  }

  public decrease() {
    this._count -= 1
    this.img.shift()
  }

  public isOver() {
    return this._count === 0
  }

  public isLow() {
    return this._count === 2
  }

  public isCritical() {
    return this._count === 1
  }
}
