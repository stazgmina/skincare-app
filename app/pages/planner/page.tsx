'use client'
import NavBar from '../../components/NavBar'
import DayPlanner from '../../components/DayPlanner'
import DrawerContainer from '../../components/DrawerContainer'
import Sidebar from '../../components/Sidebar'

//planner requiers sever changes to responsive design as it is done terribly

const products = [
  { 
    id: 1, 
    name: 'Radiant Glow Serum', 
    price: '$55', 
    image: 'https://picsum.photos/200' 
  },
  { 
    id: 2, 
    name: 'Hydrating Moisture Cream', 
    price: '$65', 
    image: 'https://picsum.photos/203' 
  },
  { 
    id: 3, 
    name: 'Revitalizing Night Elixir', 
    price: '$75', 
    image: 'https://picsum.photos/202' 
  },
  { 
    id: 4, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/201' 
  },
  { 
    id: 5, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/201' 
  },
  { 
    id: 6, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/201' 
  },
  { 
    id: 7, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/201' 
  },
  { 
    id: 8, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/201' 
  }
]

const Planner = () => {
  return (
    <main role="main" className="min-h-screen flex flex-col">
      <NavBar />

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-1">
        <article className="w-5/6 lg:p-2">
          <div className="overflow-x-auto h-full">
            <div className="min-w-[1200px] h-full">
              <DayPlanner desktop />
            </div>
          </div>
        </article>
        <aside className="w-1/6">
          <Sidebar products={products} />
        </aside>
      </div>

      {/* Tablet layout */}
      <div className="hidden md:flex lg:hidden flex-1">
        <article className="flex-1 p-2">
          <DayPlanner />  {/* remains in mobile state */}
        </article>
        <aside className="w-1/3 p-2">
          <Sidebar products={products} />
        </aside>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col flex-1">
        <article className="flex-1">
          <DayPlanner />
        </article>
        <div className="fixed bottom-0 left-0 right-0">
          <DrawerContainer products={products} />
        </div>
      </div>
    </main>
  )
}

export default Planner