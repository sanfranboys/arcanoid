import { Nullable } from './types'
import { Ball } from './Ball'
import { Paddle } from './Paddle'
import { Wall } from './Wall'
import { Score } from './Score'
import { Lives } from './Lives'
import { Color } from './colors'

class Sanfranoid {
  finishPageRoute = '/game/finish'

  ctx: Nullable<CanvasRenderingContext2D>

  canvas: HTMLCanvasElement

  ball: Ball

  paddle: Paddle

  wall: Wall

  score: Score

  lives: Lives

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.ball = new Ball(canvas)
    this.paddle = new Paddle(canvas)
    this.wall = new Wall(canvas, { color: Color.Green })
    this.score = new Score(canvas)
    this.lives = new Lives(canvas)
  }

  public go() {
    const draw = () => {
      this.clear()

      this.bricksProcessing()

      const { ball } = this

      if (ball.crossedRightOrLeft()) {
        ball.changeXDirection()
      }

      if (ball.crossedTop()) {
        ball.changeYDirection()
      } else if (ball.crossedBottom()) {
        if (this.paddle.isCrossedBy(ball)) {
          this.paddleCrossedProcessing()
        } else {
          this.failProcessing()
        }
      }

      this.ball.draw()
      this.paddle.draw()
      this.wall.draw()
      this.score.draw()
      this.lives.draw()

      requestAnimationFrame(draw)
    }

    draw()
  }

  private failProcessing() {
    this.lives.decrease()

    if (this.lives.isLow()) {
      this.wall.setColor(Color.Yellow)
    } else if (this.lives.isCritical()) {
      this.wall.setColor(Color.Red)
    }

    if (this.lives.isOver()) {
      this.endGame()
    } else {
      this.ball.setStartPosition()
      this.paddle.setStartPosition()
    }
  }

  private paddleCrossedProcessing() {
    const { speed } = this.paddle
    const { ball } = this

    if (Math.abs(speed) > 25) {
      if (speed > 0) {
        ball.moveLeft()
      } else {
        ball.moveRight()
      }
    } else {
      ball.changeYDirection()
    }

    this.paddle.speed = 0
  }

  private bricksProcessing() {
    const { ball } = this

    this.wall.eachBrick((brick) => {
      if (brick.isExist() && brick.isCrossedBy(ball)) {
        brick.destroy()

        ball.changeYDirection()
        this.score.increase()

        if (this.wall.isDestroyed()) {
          this.wall.createBricks()
        }
      }
    })
  }

  private endGame() {
    this.paddle.destroy()
    window.location.href = this.finishPageRoute
  }

  private clear() {
    if (this.ctx) {
      const { width, height } = this.canvas
      this.ctx.clearRect(0, 0, width, height)
    }
  }
}

export default Sanfranoid
