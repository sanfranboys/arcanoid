import { Color } from './settings'

export type Nullable<T> = T | null

export type FeatureOptions = {
  x?: number
  y?: number
  color?: Color
}

export type BrickOptions = {
  width: number
  height: number
} & FeatureOptions
