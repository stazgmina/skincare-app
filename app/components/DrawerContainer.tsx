'use client'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import FilterSortControls from './FilterSortControls'
import ProductList from './ProductList'

// Define the type for a product
interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface DrawerContainerProps {
  products: Product[]
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({ products }) => {
  const minHeight = 80   // minimum height (handle visible)
  const maxHeight = 400  // full expanded height

  const [drawerHeight, setDrawerHeight] = useState(maxHeight)
  const [lastY, setLastY] = useState<number | null>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setLastY(e.clientY)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Do not call e.preventDefault() here; rely on CSS touchAction on the handle
    if (lastY !== null) {
      const delta = lastY - e.clientY
      setDrawerHeight(prev => {
        let newHeight = prev + delta
        if (newHeight < minHeight) newHeight = minHeight
        if (newHeight > maxHeight) newHeight = maxHeight
        return newHeight
      })
      setLastY(e.clientY)
    }
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId)
    setLastY(null)
  }

  return (
    <div 
      className="md:static fixed bottom-0 left-0 right-0 overflow-hidden border border-t-2 border-pink-200 bg-white rounded-lg"
      style={{ height: `${drawerHeight}px`, transition: lastY ? 'none' : 'height 0.2s' }}
      aria-label="Expandable drawer"
    >
      {/* Zwiększony hitbox dla rączki z szerszym obszarem */}
      <div 
        className="relative mx-auto mt-2 w-32 h-12 grid place-items-center cursor-grab"
        style={{ touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        aria-label="drawer handle"
      >
        {/* Wizualna rączka o tej samej wielkości */}
        <div className="w-12 h-3 bg-pink-200 rounded-full" />
      </div>
      {/* Drawer content */}
      <div className="p-2">
        <div className="flex flex-col md:flex-row items-stretch gap-2 p-1 w-full">
          <SearchBar />
          <FilterSortControls />
        </div>
        {/* Zmniejszony margines nad listą produktów */}
        <div className="mt-4">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  )
}

export default DrawerContainer
