import React, { memo } from 'react';

// reactstrap components
import { Container } from 'reactstrap';
import './Styles.css';
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <header className="page-header header-background" data-parallax={true} ref={pageHeader}>
        <div className="filter" />
        <Container>
          <div className="motto text-center" id="index">
            <h1>Permiteme ayudarte</h1>
            <h3>Toma terapia, no se lo dejes al tiempo</h3>
            <br />
          </div>
        </Container>
      </header>
    </>
  );
}

export default memo(LandingPageHeader);
