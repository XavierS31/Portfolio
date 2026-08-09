import { useEffect } from 'react'

export function usePokedexNavigation({ previousCourse, nextCourse }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previousCourse()
      }

      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'a') {
        event.preventDefault()
        nextCourse()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextCourse, previousCourse])
}
