import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Latar Belakang" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">KEDATANGAN MUSIM BARU</h5>
                        <h5 className="card-text">CEK SEMUA TREN</h5>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default Home;
