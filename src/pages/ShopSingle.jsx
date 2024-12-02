import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ShopSingle = ({handleAddToCart}) => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Manage quantity input

  useEffect(() => {
    // Fetch the product details based on the product ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Set the single product data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false); // Stop loading if there's an error
      });
  }, [id]); // Re-fetch if product ID changes

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value >= 1) {
      setQuantity(value); // Update quantity if it's greater than 0
    }
  };

  if (loading) {
    return <p className="text-center">Loading product details...</p>;
  }

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  return (
    <div>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="/">Home</Link> <span className="mx-2 mb-0">/</span>
                <strong className="text-black">{product.title}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid "
                  style={{width: "300px", marginLeft: "30%"}}
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{product.title}</h2>
                <p>{product.description}</p>
                <p>
                  <strong className="text-primary h4">${product.price}</strong>
                </p>
                
                
                <p>
                  <Link  onClick={() => handleAddToCart(product)} to="/cart" className="buy-now btn btn-sm btn-primary">
                    Add To Cart
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopSingle;
