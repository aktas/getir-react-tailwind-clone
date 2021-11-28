import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const ProductItem = ({product}) => {
    return(
        <div className="bg-white flex flex-col relative items-center text-center p-3">
            <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md ">
                <AiOutlinePlus />
            </button>
            <img src={product.image} alt={product.title} />
            <div className="text-sm font-semibold text-brand-color">{product.price}</div>
            <div className="text-sm font-semibold text-gray-900">{product.title}</div>
            <div className="text-gray-500 text-sm">{product.alt}</div>
        </div>
    )
}

export default ProductItem