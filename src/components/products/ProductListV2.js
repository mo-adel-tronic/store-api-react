import Product from "./Product"
function ProductListV2() {
  return (
    <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <Product />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductListV2