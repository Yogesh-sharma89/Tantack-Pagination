import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products }) => {

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {products?.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default Products
