// TypeScript types for Interactive Display IFP50 Series

export interface InteractiveDisplayIFP50 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface InteractiveDisplayIFP51 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface InteractiveDisplayIFP52 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface InteractiveDisplayIFP62 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface IFP50SeriesResponse {
  success: boolean
  data: InteractiveDisplayIFP50[]
  message?: string
}

export interface IFP51SeriesResponse {
  success: boolean
  data: InteractiveDisplayIFP51[]
  message?: string
}

export interface IFP52SeriesResponse {
  success: boolean
  data: InteractiveDisplayIFP52[]
  message?: string
}

export interface IFP62SeriesResponse {
  success: boolean
  data: InteractiveDisplayIFP62[]
  message?: string
}

export interface IFP50SeriesError {
  success: false
  error: string
  message: string
}

export interface IFP51SeriesError {
  success: false
  error: string
  message: string
}

export interface IFP52SeriesError {
  success: false
  error: string
  message: string
}

export interface IFP62SeriesError {
  success: false
  error: string
  message: string
} 