import { useEffect, useState } from "react"
import CatList from "../categories/CatList"
import Product from "./Product"

function ProductList() {
    const apiProducts = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [cats, setCats] = useState([])
    const [activeItem, setActiveItem] = useState('')
    // get any data
    const getData = (url, callback) => {
        fetch(url)
            .then(res=>res.json())
            .then(data=>callback(data))
    }

    useEffect(()=>{
        getData(apiProducts, setProducts)
        getData(`${apiProducts}/categories`, setCats)
    },[])

    useEffect(()=>{
        if (activeItem == '') {
            getData(apiProducts, setProducts)
        } else {
            getData(`${apiProducts}/category/${activeItem}`, setProducts)
        }
    },[activeItem])
  return (
    <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
            <CatList cats={cats} setActive={setActiveItem} active={activeItem} />
            <div className="row">
                {
                    products.map(product => {
                        return(
                            <div className="col-12 col-lg-4 mb-3 d-flex align-items-stretch" key={product.id}>
                                <Product product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default ProductList