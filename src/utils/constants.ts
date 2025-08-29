/**
 * Application constants and configuration
 * Centralized configuration for better maintainability
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  TIMEOUT: 10000,
  RETRY_COUNT: 3,
  RETRY_DELAY: 1000,
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes
} as const

// Product Series Configuration
export const PRODUCT_SERIES = {
  IFP50: 'IFP50 Series',
  IFP51: 'IFP51 Series',
  IFP52: 'IFP52 Series',
  IFP62: 'IFP62 Elite Series',
  RK3588: 'RK3588 Elite Series',
  ADV311D2: 'ADV311D2 Enterprise Series',
  T982: 'T982 Professional Series',
  ADV100: 'ADV100 Series',
  IWBS82: 'IWBS82 Series',
  IWBP82: 'IWBP82 Series',
  SMART_BLACKBOARD_M86: 'SmartBlackboardM86 Series',
  SMART_BLACKBOARD_M86LB: 'M86LB Series',
  SMART_TOUCH_TABLE: 'SmartTouchTable Series',
  SMART_LIFTING_TOUCH_TABLE: 'SmartLiftingTouchTable Series',
  SMART_TV_LTS: 'SmartTVLTS Series',
  FLOOR_KIOSK: 'Floor Kiosk Series',
  PORTABLE_PANEL: 'Portable Panel Series',
  MEETING_POD: 'Meeting Pod Series',
  TV_STAND: 'TV Stand Series',
  OPS: 'OPS Series',
} as const

// API Endpoints
export const API_ENDPOINTS = {
  // Interactive Displays
  IFP50_SERIES: '/api/interactive-display/ifp50-series',
  IFP51_SERIES: '/api/interactive-display/ifp51-series',
  IFP52_SERIES: '/api/interactive-display/ifp52-series',
  IFP62_SERIES: '/api/interactive-display/ifp62-series',
  
  // IFPD Products
  RK3588: '/api/ifpd/rk3588',
  ADV311D2: '/api/ifpd/adv311d2',
  T982: '/api/ifpd/t982',
  ADV100: '/api/ifpd/adv100',
  IWBS82: '/api/ifpd/iwbs82',
  IWBP82: '/api/ifpd/iwbp82',
  
  // Smart Solutions
  SMART_BLACKBOARD_M86: '/api/smart-solutions/smart-blackboard-m86',
  SMART_BLACKBOARD_M86LB: '/api/smart-solutions/smart-blackboard-m86lb',
  SMART_TOUCH_TABLE: '/api/smart-solutions/smart-touch-table',
  SMART_LIFTING_TOUCH_TABLE: '/api/smart-solutions/smart-lifting-touch-table',
  SMART_TV_LTS: '/api/smart-solutions/smart-tv-lts',
  
  // Accessories
  FLOOR_KIOSK: '/api/accessories/floor-kiosk',
  PORTABLE_PANEL: '/api/accessories/portable-panel',
  MEETING_POD: '/api/accessories/meeting-pod',
  TV_STAND: '/api/accessories/tv-stand',
  OPS: '/api/accessories/ops',
  
  // General
  ALL_PRODUCTS: '/api/products/all',
  CONTACT: '/api/contact',
} as const

// Navigation Routes
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CONTACT: '/contact',
  ABOUT: '/about',
  
  // Interactive Displays
  IFP50_SERIES: '/interactive-displays/ifp50-series',
  IFP51_SERIES: '/interactive-displays/ifp51-series',
  IFP52_SERIES: '/interactive-displays/ifp52-series',
  IFP62_SERIES: '/interactive-displays/ifp62-series',
  
  // IFPD Products
  RK3588: '/ifpd/rk3588',
  ADV311D2: '/ifpd/adv311d2',
  T982: '/ifpd/t982',
  ADV100: '/ifpd/adv100',
  IWBS82: '/ifpd/iwbs82',
  IWBP82: '/ifpd/iwbp82',
  
  // Smart Solutions
  SMART_BLACKBOARD_M86: '/smart-solutions/smart-blackboard-m86',
  SMART_BLACKBOARD_M86LB: '/smart-solutions/smart-blackboard-m86lb',
  SMART_TOUCH_TABLE: '/smart-solutions/smart-touch-table',
  SMART_LIFTING_TOUCH_TABLE: '/smart-solutions/smart-lifting-touch-table',
  SMART_TV_LTS: '/smart-solutions/smart-tv-lts',
  
  // Accessories
  FLOOR_KIOSK: '/accessories/floor-kiosk',
  PORTABLE_PANEL: '/accessories/portable-panel',
  MEETING_POD: '/accessories/meeting-pod',
  TV_STAND: '/accessories/tv-stand',
  OPS: '/accessories/ops',
} as const

// UI Configuration
export const UI_CONFIG = {
  // Colors
  PRIMARY_COLOR: '#dc2626', // red-600
  PRIMARY_HOVER: '#b91c1c', // red-700
  SECONDARY_COLOR: '#6b7280', // gray-500
  SUCCESS_COLOR: '#059669', // emerald-600
  ERROR_COLOR: '#dc2626', // red-600
  WARNING_COLOR: '#d97706', // amber-600
  
  // Spacing
  SECTION_PADDING: 'py-20',
  CONTAINER_PADDING: 'px-4 sm:px-6 lg:px-8',
  MAX_WIDTH: 'max-w-7xl',
  
  // Animation
  TRANSITION_DURATION: 'duration-300',
  HOVER_SCALE: 'hover:scale-105',
  
  // Shadows
  CARD_SHADOW: 'shadow-md',
  HOVER_SHADOW: 'hover:shadow-lg',
} as const

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_FAILED: 'Failed to fetch data. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  VALIDATION_ERROR: 'Please check your input and try again.',
} as const

// Loading Messages
export const LOADING_MESSAGES = {
  FETCHING_DATA: 'Loading data...',
  FETCHING_PRODUCTS: 'Loading products...',
  PROCESSING: 'Processing...',
  SAVING: 'Saving...',
  UPLOADING: 'Uploading...',
} as const

// Success Messages
export const SUCCESS_MESSAGES = {
  DATA_FETCHED: 'Data loaded successfully',
  PRODUCTS_LOADED: 'Products loaded successfully',
  SAVED: 'Saved successfully',
  UPLOADED: 'Uploaded successfully',
} as const
