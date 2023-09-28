import React, { useState, useEffect } from 'react';
const jsonData = {
  "aaData": [
   
  ]
};

export default function Produk() {
  const [ data, setData] = useState(jsonData.aaData);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://sistemtoko.com/public/demo/product");
     
      if (componentMounted) {
      const jsonData = await response.json();
        
        // setLoading(true);
        setData(jsonData.aaData);
        setFilter(jsonData.aaData);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  const Loading = () => {
    return <p>Loading....</p>;
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">Semua</button>
          <button className="btn btn-outline-dark me-2">Pakaian Pria</button>
          <button className="btn btn-outline-dark me-2">Pakaian Wanita</button>
          <button className="btn btn-outline-dark me-2">Elektronik</button>
        </div>
        <div className="row">
          {filter.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.photo} className="card-img-top" alt={product.name} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name.substring(0, 12)}</h5>
                  <p className="card-text lead fw-bold">Rp.{product.totalPrice}</p>
                  <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Masukan Keranjang</a>


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





