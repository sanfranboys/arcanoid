import { Nullable } from './types'

class Sanfranoid {
  constructor(canvas: HTMLCanvasElement) {
    const ctx: Nullable<CanvasRenderingContext2D> = canvas.getContext('2d')

    if (ctx) {
      const ballRadius = 10
      let x = canvas.width / 2
      let y = canvas.height - 30
      let dx = 2
      let dy = -2
      const paddleHeight = 10
      const paddleWidth = 75
      let paddleX = (canvas.width - paddleWidth) / 2
      let rightPressed = false
      let leftPressed = false
      const brickRowCount = 5
      let brickColumnCount = 3
      const brickWidth = 75
      const brickHeight = 20
      const brickPadding = 10
      const brickOffsetTop = 30
      const brickOffsetLeft = 30
      let score = 0
      let lives = 3

      const bricks: any = []

      for (let c = 0; c < brickColumnCount; c += 1) {
        bricks[c] = []
        for (let r = 0; r < brickRowCount; r += 1) {
          bricks[c][r] = { x: 0, y: 0, status: 1 }
        }
      }

      const keyDownHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 39) {
          rightPressed = true
        } else if (e.keyCode === 37) {
          leftPressed = true
        }
      }
      const keyUpHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 39) {
          rightPressed = false
        } else if (e.keyCode === 37) {
          leftPressed = false
        }
      }
      const mouseMoveHandler = (e: MouseEvent) => {
        const canvasOffsetLeft =
          canvas.getBoundingClientRect().left + document.body.scrollLeft
        const relativeX = e.clientX - canvasOffsetLeft
        if (relativeX > 0 && relativeX < canvas.width) {
          paddleX = relativeX - paddleWidth / 2
        }
      }

      document.addEventListener('keydown', keyDownHandler, false)
      document.addEventListener('keyup', keyUpHandler, false)
      document.addEventListener('mousemove', mouseMoveHandler, false)

     const destroy = () => {
        document.removeEventListener('keydown', keyDownHandler, false)
        document.removeEventListener('keyup', keyUpHandler, false)
        document.removeEventListener('mousemove', mouseMoveHandler, false)
  }

      const collisionDetection = () => {
        for (let c = 0; c < brickColumnCount; c += 1) {
          for (let r = 0; r < brickRowCount; r += 1) {
            const b = bricks[c][r]
            if (b.status === 1) {
              if (
                x > b.x &&
                x < b.x + brickWidth &&
                y > b.y &&
                y < b.y + brickHeight
              ) {
                dy = -dy
                b.status = 0
                score += 1
                if(score % 5 === 0){
                  brickColumnCount +=1
                  bricks.unshift([{ x: 0, y: 0, status: 1 },
                    { x: 0, y: 0, status: 1 },{ x: 0, y: 0, status: 1 }
                  ,{ x: 0, y: 0, status: 1 },{ x: 0, y: 0, status: 1 }])
                }
                if (lives === 0) {
                if (score === brickRowCount * brickColumnCount) {
                  destroy()
                  window.location.href = '/game/finish'
                }
              }
              }
            }
          }
        }
      }

      const drawBall = () => {
        ctx.beginPath()
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#0095DD'
        ctx.fill()
        ctx.closePath()
      }
      const drawPaddle = () => {
        ctx.beginPath()
        ctx.rect(
          paddleX,
          canvas.height - paddleHeight,
          paddleWidth,
          paddleHeight
        )
        ctx.fillStyle = '#0095DD'
        ctx.fill()
        ctx.closePath()
      }
      const drawBricks = () => {
        for (let c = 0; c < brickColumnCount; c += 1) {
          let row = true
          for (let r = 0; r < brickRowCount; r += 1) {
            if (bricks[c][r].status === 1) {
              row = false
              const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft
              const brickY = c * (brickHeight + brickPadding) + brickOffsetTop
              bricks[c][r].x = brickX
              bricks[c][r].y = brickY
              ctx.beginPath()
              ctx.rect(brickX, brickY, brickWidth, brickHeight)
              ctx.fillStyle = '#0095DD'
              ctx.fill()
              ctx.closePath()
            }
          }
          if(row){
            row = false
            brickColumnCount -= 1
            bricks.splice(c, 1)
          }
        }
      }
      const drawScore = () => {
        ctx.font = '16px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText(`Score: ${score}`, 8, 20)
      }
      const drawLives = () => {
        ctx.font = '16px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20)
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBricks()
        drawBall()
        drawPaddle()
        drawScore()
        drawLives()
        collisionDetection()

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
          dx = -dx
        }
        if (y + dy < ballRadius) {
          dy = -dy
        } else if (y + dy > canvas.height - ballRadius) {
          if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
          } else {
            lives -= 1
            if (!lives) {
              destroy()
              window.location.href = '/game/finish'
            } else {
              x = canvas.width / 2
              y = canvas.height - 30
              dx = 3
              dy = -3
              paddleX = (canvas.width - paddleWidth) / 2
            }
          }
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) {
          paddleX += 7
        } else if (leftPressed && paddleX > 0) {
          paddleX -= 7
        }

        x += dx
        y += dy
        requestAnimationFrame(draw)
      }

      draw()
    }
  }

  // Пока отрубим тут линтер, потом будем рефакторить и ошибка class-methods-use-this уйдет
  /* eslint-disable-next-line */
  public go() {}
}

export default Sanfranoid
