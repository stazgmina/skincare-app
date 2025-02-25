'use client'
import SearchBar from './SearchBar'
import FilterSortControls from './FilterSortControls'
import ProductList from './ProductList'

interface SidebarProps {
  products: { id: number; name: string; price: string; image: string }[]
}

const Sidebar: React.FC<SidebarProps> = ({ products }) => {
  return (
    <div className="sticky top-0 border-l-2 border-pink-500">
      <div className="flex flex-col gap-2 p-4 border-b border-pink-500">
        <SearchBar />
        <FilterSortControls />
      </div>
      <div className="mt-4">
        <ProductList products={products} />
      </div>
    </div>
  )
}

export default Sidebar
