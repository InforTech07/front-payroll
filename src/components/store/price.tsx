type PriceProps = {
    currency: string;
    num: number | string;
    numSize: string;
  }

function Price({currency, num, numSize }: PriceProps) {
    return (
      <>
        {currency}<span className={numSize}>{num}</span>
      </>
    )
  }
  
  export default Price