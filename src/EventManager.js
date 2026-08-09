import { useEffect } from 'react'

export function usePokedexNavigation({ previousEntry, nextEntry }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previousEntry()
      }

      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'a') {
        event.preventDefault()
        nextEntry()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextEntry, previousEntry])
}
