import { useCallback, useRef } from 'react'

export const useScrollObserver = (fn: () => void, loading: boolean) => {
  const observer = useRef<IntersectionObserver>(null)

  return useCallback(
    (node) => {
      if (loading) return

      if (observer.current) observer.current.disconnect()

      // @ts-ignore
      observer.current = new IntersectionObserver(
        ([entries]) => {
          if (entries.isIntersecting) fn()
        },
        {
          rootMargin: '20px',
          threshold: 0.2,
        }
      )

      if (node) observer.current.observe(node)
    },
    [loading, fn]
  )
}
