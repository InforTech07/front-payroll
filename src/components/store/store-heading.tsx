
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
    <div className="">
      <PageTitle text="Tienda Solidaria" />
    </div>
  )
}

export default StoreHeading