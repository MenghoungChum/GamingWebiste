import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { AllProductsList } from '../ProductList/ProductList';


const ProdudFeature = () => {
  const [category,setCategory]=useState('All');
  const filterProduct = category =='All' ? AllProductsList: AllProductsList.filter(item=>item.category===category);
  return (
    <section>
        <div className='max-w-[1440px] mx-auto md:px-10 px-4 py-20'>
            <h3 data-aos="zoom-in" className='text-4xl font-black font-mono bg-clip-text text-transparent tracking-wide bg-gradient-to-r from-purple-500 to-orange-500 w-fit'>Featured Products</h3>
            <p data-aos="zoom-in" className='text-sky-200 text-base my-4 dark:text-black'>Top picks from our gaming collection</p>
            <div className='flex items-center gap-4 justify-center flex-wrap'>
                {
                  productCategory.map(item=>{
                    return(
                      <button 
                      data-aos="zoom-in-up"
                      onClick={()=>setCategory(item)}
                      key={item} className={`px-4 py-2 rounded-lg border-2 border-white dark:border-zinc-500 text-white dark:text-black hover:bg-red-500 active:bg-red-700 transition-all duration-300 ease-in-out ${category ==item ? 'bg-red-500 text-white' : 'bg-transparent text-black' }`}>{item}</button>
                    )
                  })
                }
            </div>
            <div>
              <ProductCard productCart={filterProduct}/>
            </div>
        </div>
    </section>
  )
}

const productCategory=['All','Gaming PC','Console','Keyboard','Mouse','HeadPhone','Monitor'];
export default ProdudFeature