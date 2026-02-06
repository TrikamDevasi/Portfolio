import React, { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    if (!cursor || !dot) return

    // Move cursor with mouse
    function handleMove(e) {
      const x = e.clientX
      const y = e.clientY
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
      dot.style.left = x + 'px'
      dot.style.top = y + 'px'
    }

    // Expand cursor on hover like original script.js
    const hoverElements = document.querySelectorAll(
      'a, button, .project-card, .skill-tag, .cert-card',
    )

    function handleEnter() {
      cursor.classList.add('cursor-expand')
    }

    function handleLeave() {
      cursor.classList.remove('cursor-expand')
    }

    window.addEventListener('mousemove', handleMove)
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    // cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMove)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  )
}

export default CustomCursor
