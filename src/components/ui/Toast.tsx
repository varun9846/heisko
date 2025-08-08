import React from 'react'
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react'

interface ToastProps {
  type: 'success' | 'error' | 'warning'
  message: string
  onClose: () => void
  isVisible: boolean
}

export const Toast: React.FC<ToastProps> = ({ type, message, onClose, isVisible }) => {
  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600',
          icon: <CheckCircle className="w-5 h-5" />
        }
      case 'error':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
          icon: <XCircle className="w-5 h-5" />
        }
      case 'warning':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600',
          icon: <AlertCircle className="w-5 h-5" />
        }
    }
  }

  const styles = getToastStyles()

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className={`
        ${styles.bgColor} ${styles.borderColor} ${styles.textColor}
        border rounded-lg shadow-lg p-4 max-w-sm w-full
        flex items-start space-x-3
      `}>
        <div className={`${styles.iconColor} flex-shrink-0 mt-0.5`}>
          {styles.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
