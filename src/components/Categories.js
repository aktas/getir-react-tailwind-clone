import { useEffect, useState } from 'react'
import categoryData from './../api/categories.json'
import Category from './ui/Category'

function Categories(){

    const [categories,setCategories] = useState()

    useEffect(() => {
        setTimeout(() => setCategories(categoryData), 1000) 
    }, [])

    return(
        <div className="bg-white py-4">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">
                    Katagoriler
                </h3>
                {!categories && (
                    <div className="loading text-center"></div>
                )}
                {categories && (
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 text-center items-center">
                        {categories.map((category, index) => <Category key={index} category={category} />)}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Categories