const getNow = () => (performance ? performance.now() : Date.now())

export class Fps {
  private frames = 0

  private pipeCallPeriod = 1000

  private prevTime = getNow()

  private _value: number = 0

  public get value() {
    return Math.floor(this._value)
  }

  start() {
    requestAnimationFrame(this.animate)
  }

  animate = () => {
    this.loop()

    requestAnimationFrame(this.animate)
  }

  private loop() {
    this.frames += 1

    const time = getNow()

    if (time > this.prevTime + this.pipeCallPeriod) {
      this._value = (this.frames * 1000) / (time - this.prevTime)
      this.prevTime = time
      this.frames = 0
    }
  }
}
