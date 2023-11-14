import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';

function Produk() {
  const [data, setData] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedVarian, setSelectedVarian] = useState('');
  const componentMounted = useRef(true);
  let timeout;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`https://sistemtoko.com/public/demo/product`);
        const jsonData = await response.json();

        if (componentMounted.current) {
          setData(jsonData.aaData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <div className="col-md-3">
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
      </div>
    );
  };

  const filterProduct = (category) => {
    const updatedData = data.filter((product) => {
      return product.keywords.some((keyword) =>
        keyword.text.toLowerCase().includes(category.toLowerCase())
      );
    });
    setData(updatedData);
  };

  const handleInputChange = (e) => {
    clearTimeout(timeout);
    const newFilterKeyword = e.target.value;
    timeout = setTimeout(() => {
      setFilterKeyword(newFilterKeyword);
    }, 300);
  };


  const ShowProducts = () => {
    const filteredData = data.filter((product) => {
      return product.name.toLowerCase().includes(filterKeyword.toLowerCase());
    });

    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cari barang"
            value={filterKeyword}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="button" >
              Search
            </button>
          </div>
        </div>

        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          {/* <button className="btn btn-outline-dark me-2" onClick={() => setFilterKeyword('')}>
            Semua Kategori
            
          </button> */}
          <button className="btn btn-outline-dark me-2" onClick={() => {
            setFilterKeyword('');
            console.log("Nilai filterKeyword sekarang: ", filterKeyword);
          }}>
            Semua Kategori
          </button>

          
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('best')}>
            Best
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('best-seller')}>
            Best Seller
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('kaos')}>
            Kaos
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('baju')}>
            Baju
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('ukuran-s')}>
            Ukuran-S
          </button>
        </div>

        <div className="container py-5">
          <div className="row py-5">
            {filteredData.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>


                <div className="card h-100 text-center p-4">
                <h4 className="text-uppercase">
                      {product.name} 
                      </h4>

                  <Link to={`/products/${product.id}`}>
                    <img src={product.photo} className="card-img-top" width="150px" height="300px" alt={product.name} />
                  </Link>

                  {/* Ganti Link ke halaman detail produk sesuai dengan URL yang diinginkan */}
                  {/* <NavLink to={`https://sistemtoko.com/public/demo/product?page=1&sorting=Lates&categories=all&search_name=none`}>
                    <img src={product.photo} className="card-img-top" width="150px" height="300px" alt={product.name} />
                  </NavLink> */}

                    
                    <div className="card-body">

                    <p className="card-text lead fw-bold">Rp {product.price}</p>

                    {/* Dropdown untuk memilih varian */}
                    <div className="mb-3">
                      <label htmlFor={`varianDropdown-${product.id}`} className="form-label"></label>
                      <select
                        id={`varianDropdown-${product.id}`}
                        className="form-select"
                        value={selectedVarian}
                        onChange={(e) => setSelectedVarian(e.target.value)}
                      >
                        <option value="">Pilih Varian</option>
                        {product.varian.map((varian) => (
                          <option key={varian.value} value={varian.value}>
                            {varian.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2" style={{ fontFamily: 'Arial' }}>
                      <i className="fa fa-shopping-cart me-1"></i>Add To Cart
                    </NavLink>
                   

                  </div>
                </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">List Product</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Produk;






