import React, { useState, useEffect, useContext } from 'react';
import { Card, Modal, ListGroup, Button } from 'react-bootstrap';
import { HttpHandler } from '../../../http/handler';
import CardFree from './CardFree.jsx';
import CardPremium from './CardPremium.jsx';
import FormularioComponent from './ComponenteFormulario.jsx';

const VentasComponent = ({ userId }) => {
  const [userValue, setUserValue] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handler = new HttpHandler();

  // producto

  // console.log(userValue);
  useEffect(() => {
    async function getUser() {
      const { user } = await handler.getUserById(userId);
      setUserValue(user);
    }

    getUser();
  }, []);

  const handleEditClick = (item) => {
    setSelectedProduct(item);
    setShowModal(true);
  };

  const handleCloseModal = async () => {
    setSelectedProduct(null);
    setShowModal(false);
    // Actualizar el estado userValue
    const { user } = await handler.getUserById(userId);
    setUserValue(user);
  };

  return (
    <>
      {!userValue || !userValue.products ? (
        <div>Cargando...</div>
      ) : (
        <div className="container">
          <div className="row mb-5">
            <h1 className="text-center my-5">Estos son tus articulos en Venta</h1>
            {userValue.products.length === 0 ? (
              <div className="de-flex text-center">
                <h3 className="alert alert-danger text-center">Aún no has vendido nada</h3>
              </div>
            ) : (
              userValue.products.map((item, index) => {
                const Component = item.premium ? CardPremium : CardFree;

                return (
                  <div className="col-lg-4 col-md-6 col-12 my-1" key={index}>
                    <Component
                      actionButton={'Editar'}
                      item={item}
                      image={item.images}
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      onEditClick={() => handleEditClick(item)}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <FormularioComponent selectedProduct={selectedProduct} onCloseModal={handleCloseModal} />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VentasComponent;
