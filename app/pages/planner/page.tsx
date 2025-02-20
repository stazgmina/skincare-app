'use client'
import NavBar from '../../components/NavBar'
import DayPlanner from '../../components/DayPlanner'
import DrawerContainer from '../../components/DrawerContainer'

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
    image: 'https://picsum.photos/200' 
  },
  { 
    id: 3, 
    name: 'Revitalizing Night Elixir', 
    price: '$75', 
    image: 'https://picsum.photos/200' 
  },
  { 
    id: 4, 
    name: 'Clarifying Cleanse Gel', 
    price: '$45', 
    image: 'https://picsum.photos/200' 
  }
]

const Planner = () => {
  return (
    <main role='main' className='min-h-screen'>
      <NavBar />
      <DayPlanner />
      <DrawerContainer products={products} />
    </main>
  )
}

export default Planner