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

// IFPDRK3588 Series Types
export interface IFPDRK3588 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface IFPDRK3588Response {
  success: boolean
  data: IFPDRK3588[]
  message?: string
}

export interface IFPDRK3588Error {
  success: false
  error: string
  message: string
}

// IFPDADV311d2 Series Types
export interface IFPDADV311d2 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface IFPDADV311d2Response {
  success: boolean
  data: IFPDADV311d2[]
  message?: string
}

export interface IFPDADV311d2Error {
  success: false
  error: string
  message: string
}

// IFPDT982 Series Types
export interface IFPDT982 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface IFPDT982Response {
  success: boolean
  data: IFPDT982[]
  message?: string
}

export interface IFPDT982Error {
  success: false
  error: string
  message: string
}

// IFPDADV100 Series Types
export interface IFPDADV100 {
  id: number
  createdAt: Date
  title: string
  description: string
  image: string
}

export interface IFPDADV100Response {
  success: boolean
  data: IFPDADV100[]
  message?: string
}

export interface IFPDADV100Error {
  success: false
  error: string
  message: string
}