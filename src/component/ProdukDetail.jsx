import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

function ProdukDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedVarian, setSelectedVarian] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      try {
       

        const response = await fetch(`https://sistemtoko.com/public/demo/single/${id}`);
        
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          console.log(response);
        } else {
          console.error('Gagal memuat produk');
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const ShowProduct = () => {
    return (
      <div>
        <div className="container py-5">
          <div className="row py-5">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="col-md-6">
                
                  <img src="/assets/product2.jpg" alt={product.product_name} height="400px" width="400px" />
                </div>

                <div className="col-md-6">
                  <h4 className="text-uppercase text-black-50">
                    {product.product_name}
                  </h4>
                  <p className="lead">Deskripsi: {product.product_description}</p>
                  <h3 className="display-6 fw-bold my-4">Rp {parseFloat(product.product_price).toLocaleString('id-ID')}</h3>
                  {/* FUNGSI Dropdown */}
                 <div className="mb-3">
                      <label htmlFor={`varianDropdown-${product.id}`} className="form-label">Pilih Varian</label>
                      <select
                        id={`varianDropdown-${product.id}`}
                        className="form-select form-select-sm-2"
                        style={{ width: '110px', height: '50px' }} 
                        value={selectedVarian}
                        onChange={(e) => setSelectedVarian(e.target.value)}
                      >
                        {product.varian && product.varian.length > 0 ? (
                        product.varian.map((varian) => (
                          <option key={varian.varian_keyword_id} value={varian.varian_keyword_value}>
                            {varian.varian_keyword_value}
                          </option>
                        ))
                      ) : (
                        <option value="" enable>
                          {product.varian_keyword_value}
                        </option>
                      )}
                     </select>
                    </div>
  
                  <button className="btn btn-outline-dark px-4 py-2">
                    BUY NOW
                  </button>
                 
                  <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> GO TO CART
              </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="display-6 fw-bolder text-center">Detail Produk</h6>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
}

export default ProdukDetail;










