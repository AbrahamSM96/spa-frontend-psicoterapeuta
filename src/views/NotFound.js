import React from 'react';
import Footer from '../components/Footer';
import './styles/404.css';

export const NotFound = () => {
  return (
    <>
      <section className="svg404">
        <svg viewBox="0 0 1520 600">
          {/* <!--pattern--> */}
          <defs>
            <pattern id="GPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <animateTransform
                attributeType="xml"
                attributeName="patternTransform"
                type="rotate"
                from="35"
                to="395"
                begin="0"
                dur="160s"
                repeatCount="indefinite"
              />
              <circle cx="10" cy="10" r="10" stroke="none" fill="yellow">
                <animate attributeName="r" type="xml" from="1" to="1" values="1; 10; 1" begin="0s" dur="2s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>

          {/* <!-- Symbol --> */}
          <symbol id="s-text">
            <text text-anchor="middle" x="35%" y="50%" dy=".35em">
              4
            </text>
          </symbol>
          <symbol id="v-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">
              0
            </text>
          </symbol>
          <symbol id="g-text">
            <text text-anchor="middle" x="65%" y="50%" dy=".35em">
              4
            </text>
          </symbol>
          <symbol id="t-text" className="not-found">
            <text text-anchor="middle" x="50%" y="500px" dy=".35em">
              Not Found
            </text>
          </symbol>
          {/* <!-- Duplicate symbols --> */}
          <use xlinkhref="#s-text" className="text"></use>
          <use xlinkhref="#s-text" className="text"></use>
          <use xlinkhref="#s-text" className="text"></use>
          <use xlinkhref="#s-text" className="text"></use>
          <use xlinkhref="#s-text" className="text"></use>
          <use xlinkhref="#v-text" className="text1"></use>
          <use xlinkhref="#v-text" className="text1"></use>
          <use xlinkhref="#v-text" className="text1"></use>

          <use id="g-usetag" xlinkhref="#g-text" className="text2" style="fill: url(#GPattern)" />

          <use id="g-usetag" xlinkhref="#t-text" className="text2" style="fill: url(#GPattern)" />
        </svg>
      </section>
      <Footer />
    </>
  );
};
