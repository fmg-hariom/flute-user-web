import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function findPercentage(partialValue: number, totalValue: number) {
  return (100 * partialValue) / totalValue;
} 
