import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Slot = React.forwardRef<any, React.HTMLAttributes<any> & { children?: React.ReactNode }>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...(children.props as any),
        className: cn(props.className, (children.props as any).className),
        ref: (node: any) => {
          if (typeof ref === 'function') ref(node)
          else if (ref) (ref as any).current = node
          const { ref: childRef } = children as any
          if (typeof childRef === 'function') childRef(node)
          else if (childRef) childRef.current = node
        },
      } as any)
    }
    return null
  }
)
