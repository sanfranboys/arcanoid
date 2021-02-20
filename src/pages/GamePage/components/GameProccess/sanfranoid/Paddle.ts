import { Brick } from './Brick'
import { Feature } from './Feature'
import { BrickOptions } from './types'

export class Paddle extends Brick {
  height = 10

  width = 100

  dx = 7

  rightPressed = false

  leftPressed = false

  speed = 0

  time: number

  lastX: number

  constructor(canvas: HTMLCanvasElement, options?: BrickOptions) {
    super(canvas, options)

    this.setStartPosition()

    document.addEventListener('keydown', this.keyDownHandler, false)
    document.addEventListener('keyup', this.keyUpHandler, false)
    document.addEventListener('mousemove', this.mouseMoveHandler, false)
  }

  destroy() {
    document.removeEventListener('keydown', this.keyDownHandler, false)
    document.removeEventListener('keyup', this.keyUpHandler, false)
    document.removeEventListener('mousemove', this.mouseMoveHandler, false)
  }

  draw() {
    const { dx } = this

    if (this.isNotCrossedRight()) {
      this.x += dx
    } else if (this.isNotCrossedLeft()) {
      this.x -= dx
    }

    super.draw(this.x, this.y)
  }

  keyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this.rightPressed = true
    } else if (e.keyCode === 37) {
      this.leftPressed = true
    }
  }

  keyUpHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      this.rightPressed = false
    } else if (e.keyCode === 37) {
      this.leftPressed = false
    }
  }

  mouseMoveHandler = (e: MouseEvent) => {
    const { canvas, width, lastX, x } = this
    const canvasOffsetLeft =
      canvas.getBoundingClientRect().left + document.body.scrollLeft
    const relativeX = e.clientX - canvasOffsetLeft

    if (relativeX > 0 && relativeX < canvas.width) {
      this.x = relativeX - width / 2
    }

    this.withTime((time) => {
      const dx = x - lastX
      this.speed = Math.round((dx / time) * 100)
      this.lastX = x
    })
  }

  withTime(callback: (time: number) => void) {
    const { time } = this

    if (time === null) {
      this.time = Date.now()
      return
    }

    const now = Date.now()
    const dTime = now - time

    if (typeof callback === 'function') {
      callback(dTime)
    }

    this.time = now
  }

  isCrossedBy(feature: Feature) {
    const { x, width } = this
    return feature.x > x && feature.x < x + width
  }

  setStartPosition() {
    this.x = (this.canvas.width - this.width) / 2
    this.y = this.canvas.height - this.height
  }

  isNotCrossedRight() {
    const { x, rightPressed, width, canvas } = this
    return rightPressed && x < canvas.width - width
  }

  isNotCrossedLeft() {
    const { leftPressed, x } = this
    return leftPressed && x > 0
  }
}
