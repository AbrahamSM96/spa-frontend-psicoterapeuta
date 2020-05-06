import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { Button, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap';
import iconGroup from '../assets/img/icons/icon-user-group.png';
import iconMail from '../assets/img/icons/icon-mail.png';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // 'https://emaillandingmom.now.sh/mail';
    // 'http://localhost:8001/mail'
    await axios
      .post('https://emaillandingmom.now.sh/mail', {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se envió tu email',
            showConfirmButton: false,
            timer: 1850,
          });
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal, intentalo de nuevo',
        });
      });
  };

  const resetForm = () => {
    document.getElementById('contact-form').reset();
  };

  return (
    <div className="section landing-section" id="readme">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">ESCRÍBEME!</h2>
            <Form id="contact-form" onSubmit={handleSubmit} className="contact-form" method="POST" action="/mail">
              <Row>
                <Col md="6">
                  <label htmlFor="name">Nombre</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <img src={iconGroup} alt="icon-group" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre" type="text" name="name" id="name" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <img src={iconMail} alt="icon-mail" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" name="email" id="email" aria-describedby="emailHelp" />
                  </InputGroup>
                </Col>
              </Row>
              <label htmlFor="message">Mensaje</label>
              <Input placeholder="Mensaje" type="textarea" rows="4" id="message" name="message" />
              <Row>
                <Col className="ml-auto mr-auto" md="2">
                  <Button className="btn-fill" color="warning" size="lg" type="submit">
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
