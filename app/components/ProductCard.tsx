'use client'
import React from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className='flex md:flex-col border border-pink-200 rounded-lg shadow-md bg-white'>
      <Image 
        src="https://picsum.photos/200" 
        alt={product.name} 
        width={96}
        height={96}
        className="object-cover rounded-s-lg md:w-full"
      />
      <div className="flex flex-col justify-between break-words p-2 flex-1 text-pink-500">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-lg">{product.price}</p>
      </div>
    </article>
  )
}

export default ProductCard
