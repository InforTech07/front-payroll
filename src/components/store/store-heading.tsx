
type PageTitleProps = {
    text: string
}

function PageTitle({ text }: PageTitleProps) {
    return (
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        {text}
      </h1>
    )
  }


function StoreHeading() {
  return (
    <div className="py-4 mb-4">
      <PageTitle text="Tienda Solidaria" />
      <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
        Aprovecha nuestro productos y compra los mejores productos.    
      </p>
    </div>
  )
}

export default StoreHeading