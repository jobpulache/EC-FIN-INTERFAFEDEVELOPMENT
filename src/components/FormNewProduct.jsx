import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Modal2 from './Modal'

export default function FormNewProduct() {

  return (
    <Modal2>
      <MainForm method="post">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control name="title" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción del producto:</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Categoría:</Form.Label>
          <Form.Control name="category" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio:</Form.Label>
          <Form.Control name="price" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descuento:</Form.Label>
          <Form.Control name="discount" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rating:</Form.Label>
          <Form.Control name="rating" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Stock:</Form.Label>
          <Form.Control name="stock" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Marca:</Form.Label>
          <Form.Control name="brand" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Peso:</Form.Label>
          <Form.Control name="weight" placeholder="" />
        </Form.Group>
        <br />
        <div style={{  display: "flex", justifyContent: "flex-end",  gap: "1rem"}}>
          <button className="btn btn-light">
            <Link className="nav-link" to='..'>
              Cancel
            </Link>
          </button>
          <button className="btn btn-primary">Submit</button>
        </div>
        <br />
      </MainForm>
    </Modal2>
  )
}
