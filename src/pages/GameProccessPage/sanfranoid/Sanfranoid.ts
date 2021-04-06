import { Nullable } from './types'
import { Ball } from './Ball'
import { Paddle } from './Paddle'
import { Wall } from './Wall'
import { Score } from './Score'
import { Lives } from './Lives'
import { Color } from './settings'
import { Pausa } from './Pausa'

class Sanfranoid {
  private readonly _ctx: Nullable<CanvasRenderingContext2D>

  private readonly _canvas: HTMLCanvasElement

  private _ball: Ball

  private readonly _paddle: Paddle

  private readonly _onGameEnd: (score: number) => void

  private _wall: Wall

  private _score: Score

  private _lives: Lives

  private _isContinues: boolean

  private pausa: Pausa

  private _starting: boolean

  private music: HTMLAudioElement

  constructor(canvas: HTMLCanvasElement, onGameEnd: (score: number) => void, music:HTMLAudioElement) {
    this._canvas = canvas
    this._onGameEnd = onGameEnd
    this._ctx = this._canvas.getContext('2d')

    this._ball = new Ball(canvas)
    this._paddle = new Paddle(canvas)
    this._wall = new Wall(canvas)
    this._score = new Score(canvas)
    this._lives = new Lives(canvas)
    this.pausa = new Pausa(canvas)

    this._isContinues = false
    this._starting = false
    this.music = music

    document.addEventListener('keydown', this.keyDownHandler, false)
  }

  private keyDownHandler = (e: KeyboardEvent) => {
    if (e.keyCode === 32) {
      this._isContinues = !this._isContinues
      if (this._isContinues) {
        this._starting = true
        this.go()
      }
    }
  }

  public go() {

    const draw = () => {
      this.clear()

      this.bricksProcessing()

      const { _ball } = this

      if (_ball.crossedRightOrLeft()) {
        _ball.changeXDirection()
      }

      if (_ball.crossedTop()) {
        _ball.changeYDirection()
      } else if (_ball.crossedBottom()) {
        if (this._paddle.isCrossedBy(_ball)) {
          this.music.play()
          this.paddleCrossedProcessing()
        } else {
          this.failProcessing()
        }
      }

      this._ball.draw()
      this._paddle.draw()
      this._wall.draw()
      this._score.draw()
      this._lives.draw()

      if (this._isContinues) {
        requestAnimationFrame(draw)
      } else if (this._starting) {
        this.pausa.draw()
      }
    }

    draw()
  }

  private failProcessing() {
    this._starting = false
    this._isContinues = false
    this._lives.decrease()

    if (this._lives.isLow()) {
      this._ball.setColor(Color.Yellow)
    } else if (this._lives.isCritical()) {
      this._ball.setColor(Color.Red)
    }

    if (this._lives.isOver()) {
      this.endGame()
    } else {
      this._ball.setStartPosition()
      this._paddle.setStartPosition()
    }
  }

  private paddleCrossedProcessing() {
    const { speed } = this._paddle
    const { _ball } = this

    if (Math.abs(speed) > 30) {
      if (speed > 0) {
        _ball.moveLeft()
      } else {
        _ball.moveRight()
      }
    } else {
      _ball.changeYDirection()
    }

    this._paddle.speed = 0
  }

  private bricksProcessing() {
    const { _ball } = this

    this._wall.eachBrick((brick) => {
      if (brick.isExist() && brick.isCrossedBy(_ball)) {
        brick.destroy()

        _ball.changeYDirection()
        this._score.increase()

        if (this._wall.isDestroyed()) {
          this._wall.createBricks()
        }
      }
    })
  }

  private endGame() {
    this.destroy()
    this._onGameEnd(this._score.getScore())
  }

  public destroy() {
    document.removeEventListener('keydown', this.keyDownHandler, false)
    this._isContinues = false
    this._paddle.destroy()
  }

  private clear() {
    if (this._ctx) {
      const { width, height } = this._canvas
      this._ctx.clearRect(0, 0, width, height)
    }
  }
}

export default Sanfranoid
