import Image from "next/image";
import Link from "next/link";
// import github from "../../assets/img/hero-bg.jpg";
import styles from "./hero.module.css";
// import { ArrowRight } from "react-bootstrap-icons";
import whiteArrow from "../../assets/img/whiteArrow.png";

const Hero = () => {
  return (
    <div className='container'>
      <div
        className={`image image-fluid container d-flex flex-column justify-content-start ${styles.hero}`}
      >
        <div className='row'>
          <div className='col-md-6 col-sm-12 col-12'>
            <span className='headTag'>#Oracle — compatible</span>
            <h1 className={`pt-3 ${styles.title}`}>
              Experience
              <br />
              Enterprise Graph
            </h1>
            <h1 className={`${styles.title}`}>
              Database Cost-
              <br />
              Effectively
            </h1>
            <div className={` ${styles.para}`}>
              <p>
                We are a reliable and innovative data solution provider that
                offers advanced database management services with our own graph
                and relational database products. As one of top contributors to
                Apache AGE project, we shape the future of data management.
              </p>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-start ${styles.footer}`}>
          <a href='#contactForm'>
            <button className='filled_btn'>
              <div className='btn-inner'>
                <div>
                  Learn More about&nbsp;
                  <span className={`${styles.fontBold}`}>
                    AgeDB Enterprise Plan
                  </span>
                </div>
                <div>
                  <Image
                    className={`${styles.arrowIcon}`}
                    src={whiteArrow}
                    alt='Icon'
                  />
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
