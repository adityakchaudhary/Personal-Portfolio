'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function FlickeringGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) {
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const squareSize = 2
    const spacing = 4
    const maxOpacity = 0.5
    let width = 0
    let height = 0
    let columns = 0
    let rows = 0
    let squares = new Float32Array()
    let pixelRatio = 1
    let isInView = false
    let animationTimeout = 0

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows; row++) {
          const verticalFade = Math.pow(1 - row / rows, 1.5)
          const opacity = squares[column * rows + row] * verticalFade
          context.fillStyle = `rgba(95, 95, 95, ${opacity})`
          context.fillRect(column * spacing, row * spacing, squareSize, squareSize)
        }
      }
    }

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      columns = Math.floor(width / spacing)
      rows = Math.floor(height / spacing)
      squares = new Float32Array(columns * rows)

      for (let index = 0; index < squares.length; index++) {
        squares[index] = Math.random() * maxOpacity
      }

      draw()
    }

    const animate = () => {
      if (!isInView) {
        return
      }

      const changes = Math.min(120, squares.length)
      for (let change = 0; change < changes; change++) {
        const index = Math.floor(Math.random() * squares.length)
        const column = Math.floor(index / rows)
        const row = index % rows
        squares[index] = Math.random() * maxOpacity
        context.clearRect(column * spacing, row * spacing, squareSize, squareSize)
        context.fillStyle = `rgba(95, 95, 95, ${squares[index] * Math.pow(1 - row / rows, 1.5)})`
        context.fillRect(column * spacing, row * spacing, squareSize, squareSize)
      }

      animationTimeout = window.setTimeout(animate, 120)
    }

    const startAnimation = () => {
      if (!reducedMotion && isInView && animationTimeout === 0) {
        animationTimeout = window.setTimeout(animate, 120)
      }
    }

    const stopAnimation = () => {
      window.clearTimeout(animationTimeout)
      animationTimeout = 0
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting
      if (isInView) {
        startAnimation()
      } else {
        stopAnimation()
      }
    })
    intersectionObserver.observe(canvas)

    return () => {
      stopAnimation()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [])

  return <canvas className={styles.flickeringGrid} ref={canvasRef} aria-hidden="true" />
}
