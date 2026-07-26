import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, { suffix = '' } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done.current) {
            done.current = true
            if (reduceMotion) {
              setValue(target)
              return
            }
            const step = Math.max(1, Math.round(target / 40))
            let cur = 0
            const tick = () => {
              cur += step
              if (cur >= target) {
                setValue(target)
                return
              }
              setValue(cur)
              requestAnimationFrame(tick)
            }
            tick()
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return { ref, display: `${value}${suffix}` }
}
