type ProductCardProps = {
    name: object
}

function ProductCard(props: ProductCardProps) {
  return <>{props.name}</>
}

export default ProductCard;
