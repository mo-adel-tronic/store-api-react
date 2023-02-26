import imgTestForProduct from '../images/slider/bg1.webp'
function ProductListV1() {
  return (
    <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    {/* Start product Card component */}
                    <div className="card">
                        <img src={imgTestForProduct} className="card-img-top" alt="product" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductListV1