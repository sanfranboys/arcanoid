export type Player = {
  sanfranId: number
  sanfranPlayer: string
  sanfranScore: number
}

export type Leader = Player & { position: number }
