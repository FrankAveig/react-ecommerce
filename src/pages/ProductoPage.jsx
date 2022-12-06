import { React, useEffect, useState, useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import { verProducto } from '../services/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CarritoContext } from '../context/CarritoContext';
import { UserContext } from '../context/UserContext';
import Alert from '@mui/material/Alert';
import './styles/product.css'
const ProductoPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

  const { id } = useParams();
  const { user: { token } } = useContext(UserContext);
  const { saveItem } = useContext(CarritoContext);


  const verInfoProducto = async () => {
    const { data: { detalles } } = await verProducto(id);
    setProduct(detalles);
    return detalles;
  };

  const logeado = (product) => {
    product.id = product._id;
    saveItem(product);
    setFlag(true);
    setInterval(() => {
      setFlag(false);
    }, 2000);
  };

  function guardar(product) {
    token ? logeado(product) : alert('Debes estar Logeado');
  }



  useEffect(() => {

    const data = async () => {
      const datos = await verInfoProducto();
      setProduct(datos);
      setLoading(false);
    };

    data();
  }, []);
  return loading ? <div className="">cargando</div> : (
    <>
      <h1>Information of product</h1>
      <div className="infoProduct">
        <div className="container">

          <div className="container_img">
            <img src={product.img} alt="" />
          </div>
          <div className="container_description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            {token ? <FontAwesomeIcon icon={faCartPlus} onClick={(e) => guardar(product)} /> : <Link to="/login"><FontAwesomeIcon onClick={(e) => guardar(product)} icon={faCartPlus} /></Link>}
            {flag ? <Alert severity="success">Product added</Alert> : null}
          </div>
        </div>
      </div>
      <h3></h3>
    </>

  );
};
export default ProductoPage;
