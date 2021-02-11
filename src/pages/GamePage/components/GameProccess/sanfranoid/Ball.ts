class Ball {
  private ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    console.log(this.ctx)
  }

  public draw() {}
}

export default Ball
