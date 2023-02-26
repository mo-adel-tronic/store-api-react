import { Link } from "react-router-dom"

export default function Product(props) {
  const {product} = props
  return (
    <div className="card py-4 text-center border-0">
        <img 
        src={product.image} 
        className="card-img-top w-75 m-auto" 
        alt="product"
        style={{maxHeight: '300px'}}
        />
        <div className="card-body d-flex flex-column justify-content-end">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={`/product/${product.id}`} className="btn btn-primary">details</Link>
        </div>
    </div>
  )
}
