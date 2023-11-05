import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function Produk() {
  const [data, setData] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://sistemtoko.com/public/demo/product");
        const jsonData = await response.json();

        if (componentMounted) {
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
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (category) => {
    const updatedData = data.filter((product) => {
      return product.keywords.some((keyword) => keyword.text.toLowerCase().includes(category.toLowerCase()));
    });
    setData(updatedData);
  };

  const handleInputChange = (e) => {
    setFilterKeyword(e.target.value); // Update filterKeyword saat input berubah
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
            placeholder="Search"
            value={filterKeyword}
            onChange={handleInputChange} // Tambahkan event handler onChange
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">
              Go
            </button>
          </div>
        </div>

        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilterKeyword('')}>Semua</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("best")}>Best</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("best-seller")}>Best Seller</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("kaos")}>Kaos</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("baju")}>Baju</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("ukuran-s")}>Ukuran-S</button>
        </div>

        <div className="row">
          {filteredData.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.photo} className="card-img-top" alt={product.name} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name.substring(0, 12)}...</h5>
                  <p className="card-text lead fw-bold">Rp.{product.total}</p>
                  <a href="" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart me-1"></i>Masukan Keranjang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Produk Terbaru</h1>
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












