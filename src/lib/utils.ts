
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper for detecting if the device is a touch device
export function isTouchDevice() {
  return (
    'ontouchstart' in window || 
    navigator.maxTouchPoints > 0
  )
}

// Animation helper functions
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Generate random floating point number within a range
export const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

// Generate random integer within a range
export const randomInt = (min: number, max: number) => Math.floor(randomFloat(min, max));

// Generate random color
export const randomColor = () => {
  const colors = ["#4ade80", "#4f46e5", "#06b6d4", "#0ea5e9", "#8b5cf6"];
  return colors[randomInt(0, colors.length)];
};

// Easing functions
export const easing = {
  easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOut: (t: number) => 1 - Math.pow(1 - t, 2),
  easeIn: (t: number) => t * t,
};

// Format large numbers
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};
