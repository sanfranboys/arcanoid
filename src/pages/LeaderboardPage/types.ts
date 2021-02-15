export type Player = {
  id: number
  avatar?: string
  name: string
  score: number
}

export type Leader = Player & { position: number }
