import React from 'react'
import Navbers from '../navbar/Navbers';
import Carousels from '../carousels/Carousels';
import ProductCard from '../productCard/ProductCard';
import TopProduct from '../productCard/TopProduct';
function HomePage() {
  return (
<>

<Navbers/>
<Navbers/>
   <Carousels/>
<ProductCard />
<TopProduct/>
</>
  )
}

export default HomePage