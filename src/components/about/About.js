import { Arrow90degUp, BoxArrowUpRight } from "react-bootstrap-icons";
import styles from "./style.module.css";
import rectangle from "../../assets/img/about-arrow.svg";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <main id='main' className='mt-4 mt-lg-5'>
        <section id='about' className='about'>
          <div className='container'>
            <div className=''>
              <p className={`container ${styles.h3}  `}>
                We&#39;re{" "}
                <span>
                  <Link
                    href='#'
                    className={`${styles.about__color} ${styles.wordWithArrow}`}
                  >
                    {" "}
                    AgeDB
                    <Image
                      src={rectangle}
                      alt='Icon'
                      className={`${styles.link}`}
                    />
                  </Link>
                </span>
                <span style={{ color: "#9f9aa6" }}>,</span> a company that
                provides enterprise grade{" "}
                <span
                  className={`${styles.about__color} ${styles.wordWithArrow}`}
                >
                  relational and graph databases{" "}
                  <Image
                    src={rectangle}
                    alt='Icon'
                    className={`${styles.link}`}
                  />
                </span>
                <span style={{ color: "#9f9aa6" }}>.</span> We also offer expert{" "}
                <span
                  className={`${styles.about__color} ${styles.wordWithArrow}`}
                >
                  services
                  <Image
                    src={rectangle}
                    alt='Icon'
                    className={`${styles.link_services}`}
                  />
                </span>{" "}
                to manage this database. Proudly, we contribute to a top level
                Apache project called{" "}
                <span className={styles.about__color}>
                  <span className={styles.wordWithArrow}>
                    {" "}
                    Apache AGE
                    <Image
                      src={rectangle}
                      alt='Icon'
                      className={`${styles.link}`}
                    />
                  </span>
                </span>
                <span style={{ color: "#9f9aa6" }}>,</span>
                {""} which makes Postgres even better by adding cool&nbsp;
                <span className={styles.about__color}>
                  <span className={styles.wordWithArrow}>
                    graph database functionality{" "}
                    <span style={{ color: "#9f9aa6" }}>.</span>
                    <Image
                      src={rectangle}
                      alt='Icon'
                      className={`${styles.link}`}
                    />
                  </span>
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutSection;
