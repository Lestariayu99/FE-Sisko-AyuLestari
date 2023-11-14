import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-md-6">
            <div style={infoContainer}>
              <h4 style={infoTitle}>Info Kontak</h4>
              <p style={infoText}>Jl. Dr. Cipta Mangunkusumo no. 66</p>
              <p style={infoText}>Email: marooncloth@gmail.com</p>
              <p style={infoText}>Telp: (123) 123 123</p>
            </div>
          </div>
          <div className="col-md-6">
            <div style={linksContainer}>
              <h4 style={linksTitle}>Tautan</h4>
              <ul style={linksList}>
                <li style={linkItem}><a href="#" style={link}>Tentang Kami</a></li>
                <li style={linkItem}><a href="#" style={link}>Produk</a></li>
                <li style={linkItem}><a href="#" style={link}>Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000',
  color: 'white',
  paddingTop: '150px', 
  paddingBottom: '150px',
};

const containerStyle = {
  marginTop: '-50px',
};

const infoContainer = {
  textAlign: 'left',
};

const infoTitle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const infoText = {
  fontSize: '1rem',
};

const linksContainer = {
  textAlign: 'right',
};

const linksTitle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const linksList = {
  listStyle: 'none',
  padding: 0,
};

const linkItem = {
  marginBottom: '10px',
};

const link = {
  color: 'white',
  textDecoration: 'none',
};

export default Footer;
