//"use client";
import ProductCard from './product-card'

const fakeProducts = [
    {
        node: {
        handle: 'fake-product-1',
        title: 'Fake Product 1',
        description: 'This is a fake product description',
        variants: {
            edges: [
            {
                node: {
                price: '10.00'
                }
            }
            ]
        },
        images: {
            edges: [
            {
                node: {
                originalSrc: 'https://placekitten.com/300/300',
                altText: 'A placeholder image of a kitten'
                }
            }
            ]
        }
        }
    },
    {
        node: {
        handle: 'fake-product-2',
        title: 'Fake Product 2',
        description: 'This is a fake product description',
        variants: {
            edges: [
            {
                node: {
                price: '20.00'
                }
            }
            ]
        },
        images: {
            edges: [
            {
                node: {
                originalSrc: 'https://placekitten.com/300/300',
                altText: 'A placeholder image of a kitten'
                }
            }
            ]
        }
        }
    },
    {
        node: {
        handle: 'fake-product-3',
        title: 'Fake Product 3',
        description: 'This is a fake product description',
        variants: {
            edges: [
            {
                node: {
                price: '30.00'
                }
            }
            ]
        },
        images: {
            edges: [
            {
                node: {
                originalSrc: 'https://placekitten.com/300/300',
                altText: 'A placeholder image of a kitten'
                }
            }
            ]
        }
        }
    },
    {
        node: {
        handle: 'fake-product-4',
        title: 'Fake Product 4',
        description: 'This is a fake product description',
        variants: {
            edges: [
            {
                node: {
                price: '40.00'
                }
            }
            ]
        },
        images: {
            edges: [
            {
                node: {
                originalSrc: 'https://placekitten.com/300/300',
                altText: 'A placeholder image of a kitten'
                }
            }
            ]
        }
        }
    }
]


function ProductListings() {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        fakeProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
    </div>
  )
}

export default ProductListings