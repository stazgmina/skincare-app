'use client'
import React from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='flex flex-col gap-4 overflow-y-auto w-full h-[200px] lg:h-[750px] lg:p-4 bg-white'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
