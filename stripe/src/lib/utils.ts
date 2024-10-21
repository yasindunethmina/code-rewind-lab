import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// mongodb+srv://yasindu:yasindu123@cluster0.vktri.mongodb.net/stripe_db?retryWrites=true&w=majority&appName=Cluster0