// useDebounceEffect.ts
import { useEffect } from 'react'

export const useDebounceEffect = (
  callback: () => void,
  deps: React.DependencyList,
  delay: number
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [...deps, callback, delay])
}
