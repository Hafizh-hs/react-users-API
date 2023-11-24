import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Carts() {
  const [carts, setCarts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}/carts`)
      .then((response) => response.json())
      .then((data) => {
        setCarts(data.carts);
      });
  }, []);
  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-primary mb-3">
        Back to home
      </button>

      {carts.map((cart, index) => (
        <div className="row mt-3" key={index}>
          {cart.products.map((product, productIndex) => (
            <>
              <div className="col-md-4" key={productIndex}>
                <img src={product.thumbnail} className="w-100 mt-2" />
              </div>

              <div className="col-md-8">
                <div className="d-flex justify-content-between align-items-center">
                  <h1>{product.title}</h1>
                </div>
                <p>
                  Quantity : <span className="fw-bold">{product.quantity}</span>
                </p>
                <span className="fs-5 me-2">Price :$ {product.price}</span>

                <p className="d-flex justify-content-end align-items-center">
                  <span className="fs-5 text-decoration-line-through me-2">
                    $ {product.discountedPrice}
                  </span>
                  <span className="fs-1 fw-bold text-danger">
                    ${" "}
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                    <p className="text-success">
                      Total :$
                      {(
                        product.total *
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </span>
                </p>
              </div>
            </>
          ))}
        </div>
      ))}
    </>
  );
}
