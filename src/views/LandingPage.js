import React from 'react';

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Row, Col, ListGroup, ListGroupItemText } from 'reactstrap';

// core components
import Navbar from '../components/Navbar.js';
import LandingPageHeader from '../components/Header/LandingPageHeader.js';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

//images
import photoPerfil from '../assets/img/faces/about-perfil-min.jpg';
import avatar1 from '../assets/img/faces/couple-min.jpg';
import avatar2 from '../assets/img/faces/family22.jpg';
import avatar3 from '../assets/img/head-social-min.png';

function LandingPage() {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });
  return (
    <>
      <Navbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="what-is-therapy">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">¿Que es terapia familiar y de pareja?</h2>
                <h5 className="description">
                  La terapia familiar y de pareja busca orientar y guiar de forma adecuada la resolución de conflictos a través técnicas
                  planteadas. En un proceso breve que se limita a 10 sesiones, misma que puede espaciar cada 7, 15 o 21 días según el
                  progreso que se vaya teniendo en el tratamiento.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain1">
                  <div className="card-avatar1">
                    <img alt="..." src={avatar1} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Terapia de pareja</CardTitle>
                    </div>
                    <p className="card-description text-center">
                      Es la unión de dos individuos que espresan sentimientos de amor, deseo íntimo, compresión, apoyándose mutuamente y
                      desean compartirlo todo...(agradable o desagradable).
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain1">
                  <div className="card-avatar1">
                    <img alt="..." src={avatar2} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Terapia familiar</CardTitle>
                    </div>
                    <p className="card-description text-center">
                      La familia es el eje fundamental en la vida del individuo, de acuerdo al rol en el ¿Que se encuentre(padre, madre e
                      hijo).
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" id="p_online">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-profile1 card-plain">
                  <div className="author">
                    <h2 className="title">Temas de abordaje</h2>
                  </div>
                  <CardBody>
                    <div className="card-description text-center">
                      <ListGroup>
                        <li className="liGroup__1">
                          <ListGroupItemText>Sexualidad</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Económico</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Infidelidad</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Tabús</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Intimidad</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Erotismo</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Frecuencia</ListGroupItemText>
                        </li>
                        <li className="liGroup__1">
                          <ListGroupItemText>Mitos</ListGroupItemText>
                        </li>
                      </ListGroup>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile1 card-plain">
                  <div className="author">
                    <h2 className="title">Síntomas</h2>
                  </div>
                  <p className="card-description text-center">
                    Nos enfrentamos a los 4 jinetes de la relación de pareja, que se desarrollan en torno a un estilo de comunicación
                    destructiva las cuales son:
                  </p>
                  <CardBody>
                    <div className="card-description text-center">
                      <ListGroup>
                        <li className="liGroup__2">
                          <ListGroupItemText>Criticas personales</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Desprecio e humillación</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Actitud defensiva</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Actitud evasiva</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Conductas de impulsividad </ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Enfermedad de algún miembro de la familia</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Problemas de los padres sobre el abuso de sustancias</ListGroupItemText>
                        </li>
                        <li className="liGroup__2">
                          <ListGroupItemText>Contratiempos inesperados</ListGroupItemText>
                        </li>
                      </ListGroup>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="p_online">
          <Container>
            <h2 className="title">Psicología Online</h2>
            <Row>
              <Col md="6">
                <Card className="card-profile1 card-plain">
                  <CardBody>
                    <CardTitle tag="h4">¿Que es la psicología online?</CardTitle>
                    <p className="description">
                      La psicología online es una nueva manera de obtener terapia por medio de las nuevas tecnologías, ya sea por video
                      llamadas realizadas por Facebook Messenger, video llamadas por Skype, llamadas o mensajes de voz por WhatsApp.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img alt="..." src={avatar3} />
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark1 text-center" id="about-me">
          <Container>
            <h2 className="title">Sobre mí</h2>
            <Row>
              <Col md="0">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img alt="..." src={photoPerfil} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Magdalena Montiel</CardTitle>
                      <h6 className="card-category">Psicoterapeuta</h6>
                    </div>
                    <div className="card-description text-center">
                      <div className="cardDescription__top">
                        <p>
                          Licenciada en psicología de la educación con Maestría en terapia familiar y de pareja. He tenido la oportunidad de
                          asistir a diversos cursos como los que menciono a continuación:{' '}
                        </p>
                      </div>
                      <ListGroup>
                        <li className="liGroup__author">
                          <ListGroupItemText>Curso de Terapia de juego para el manejo del abuso sexual</ListGroupItemText>
                        </li>
                        <li className="liGroup__author">
                          <ListGroupItemText>Técnicas para mejorar la cognición</ListGroupItemText>
                        </li>
                        <li className="liGroup__author">
                          <ListGroupItemText>Taller de la educación en la familia en reciprocidad</ListGroupItemText>
                        </li>
                      </ListGroup>
                      A la vez he asistido a un congreso internacional de diversidad, desarrollo e integración sistemática.
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-just-icon btn-neutral" color="link" href="https://www.facebook.com/magdalena.montiel.98">
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button className="btn-just-icon btn-neutral ml-1" color="link" href="https://www.instagram.com/magdalena.montiel.98/">
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <ContactForm></ContactForm>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
