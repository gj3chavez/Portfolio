import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import atom from "../../assets/atom.png";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link} = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <div className="portfolio__links">
              {/* <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__link"
              >
                See Deployed App
              </a>
              <a
                href="https://github.com/gj3chavez"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__link"
              >
                GitHub
              </a> */}
            </div>



            {/* <Link
              className="link"
              // to='pricing'
              to="book"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Learn More
              <FaArrowRight className="link__icon"></FaArrowRight>
            </Link> */}
            <img src={shapeTwo} alt="" className="shape c__shape" />

            <ul>
              <div className="transform-scale-h" key={4}>
                <h4>
                  <img src={atom} alt="" height="26" width="26" viewBox="0 0 16 16" />
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Deployed App
                  </a>
                </h4>
              </div>
              <br />
              <div className="transform-scale-h">
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <a
                    href="https://github.com/gj3chavez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      See GitHub
                  </a>
                </h4>
              </div>
            </ul>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
