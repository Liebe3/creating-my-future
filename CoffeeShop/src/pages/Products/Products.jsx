import React, { useEffect } from 'react';
import Glide from 'react-glidejs';
import './Products.module.css'; 

const Products = () => {
  useEffect(() => {


    const scrollAnimation = (entries, className) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    };

    const Myglide = new IntersectionObserver((entries) => {
      scrollAnimation(entries, "glide-show");
    });

    const glide = document.querySelectorAll(".glide");
    glide.forEach((element) => {
      Myglide.observe(element);
    });

    const Myglides = new IntersectionObserver((entries) => {
      scrollAnimation(entries, "glides-show");
    });

    const glides = document.querySelectorAll(".glides");
    glides.forEach((element) => {
      Myglides.observe(element);
    });
    return () => {
      Myglide.disconnect();
      Myglides.disconnect();
    };
  }, []);

  const glideOptions = {
    type: "carousel",
    perView: 3,
    breakpoints: {
      700: {
        perView: 2
      },
      450: {
        perView: 1
      }
    }
  };

  return (
    <div>
      <header>
        <nav>
        </nav>
      </header>

      <main>
        <div className="coffee">
          <h1>C O F F E E </h1>
        </div>
        <div className="coffee-products">
          <Glide {...glideOptions}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {/*dito na mano manong lalagay ung products? */}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </Glide>
        </div>

        <div className="pastry">
          <h1>P A S T R I E S</h1>
        </div>
        <div className="pastries-products">
          <Glide {...glideOptions}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {/* dito rin ung sa pastry, use <li */}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="fa-solid fa-chevron-left"></i></button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </Glide>
        </div>
      </main>

      <script src="./coffee.js/nav.js"></script>
      <script src="./coffee.js/product.js"></script>
      <script src="./coffee.js/cart.js"></script>
    </div>
  );
}

export default Products;
