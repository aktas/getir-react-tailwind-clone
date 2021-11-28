import { useState, useEffect } from 'react'
import Products from './../api/products.json'
import ProductItem from './ui/ProductItem'

function Favorites(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(Products)
    }, [])

    return(
        <div className="mt-6">
            <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">
                Favoriler
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-8 gap-y-1 gap-0.1 bg-white rounded-lg overflow-hidden">
                {products.length && products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
        </div>
    )
}

export default Favorites