//import ProductImage from '@/components/ProductImage'
import Link from 'next/link'


import { useState } from 'react'
import Price from './price'
import ProductForm from './product-form'



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import Link from 'next/link'

type ProductInfoProps = {
    title: string
    description: string
    price: string
}   

function ProductInfo({ title, description, price }: ProductInfoProps) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg">
        {description}
      </p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        <Price
          currency="$"
          num={price}
          numSize="text-2xl"
        />
      </div>
    </div>
  )
}

function BackToProductButton() {
  return (
    <Link href="/" passHref
        aria-label="back-to-products"
        className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      >
        {/* <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-2 inline-flex" /> */}
        Back To All Products
    </Link>
  )
}

type ProductDetailsProps = {
    productData: any
}

function ProductDetails({ productData }: ProductDetailsProps) {
  const [variantPrice, setVariantPrice] = useState(productData.variants.edges[0].node.price)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm 
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges} 
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

type ProductSection = {
    productData: any
}

function ProductSection({ productData }: ProductSection) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      {/* <ProductImage images={productData.images.edges} /> */}
      <ProductDetails productData={productData} />
    </div>
  )
}

export default ProductSection