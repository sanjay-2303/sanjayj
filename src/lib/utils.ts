
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper for detecting if the device is a touch device
export function isTouchDevice() {
  return (
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}
