import React from 'react'

const ProductPage = ({ params }) => {
  return (
    <div>
      Product {params.id}
    </div>
  )
}

export default ProductPage