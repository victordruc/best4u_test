import styles from "./style.module.css";
import ProductContext from "../../context/ProductContext";
import ProductCardCarousel from "./ProductCardCarousel";
import { useContext, useRef } from "react";
import Button from "../Button/Button";

const ProductCarousel = ({ context }) => {
  const value = useContext(context);
  const carouselElement = useRef(null);

  const handleClick = (right) => {
    const width = carouselElement.current.offsetWidth
    const scrollWidht = carouselElement.current.scrollWidht
    const scrollLeft = carouselElement.current.scrollLeft
    let widthToScroll = 0
    if(right) {
      widthToScroll = width/8 + scrollLeft
      if(widthToScroll>=(scrollWidht-width)) {
        widthToScroll = scrollWidht-width
      }
    } else {
      widthToScroll = scrollLeft-width/8
      if(widthToScroll<=0) {
        widthToScroll = 0
      }
    }
    carouselElement.current.scrollTo(widthToScroll,0)
  }

  const handleMove = (e) => {
    const scrollLeft = carouselElement.current.scrollLeft
    e.target.addEventListener("pointermove",pointerMove)
    e.target.addEventListener("pointerleave",pointerLeave)
    e.target.addEventListener("pointerup",pointerLeave)

    const shiftX = e.clientX

    function pointerMove(e) {
      const shiftXAfter = e.clientX-shiftX
      carouselElement.current.scrollTo(scrollLeft-shiftXAfter,0)
    }
    function pointerLeave() {
      e.target.removeEventListener("pointermove",pointerMove)
    }
  }

  return (
    <div id="carousel" className={styles.carouselWrapper}>
      <Button
        className={styles.roundBtnLeft}
        onClick={()=>handleClick()}
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        }
        type="round"
      />
      <div ref={carouselElement} onPointerDown={handleMove} onDragStart={e=>e.preventDefault()} className={styles.carousel}>
        {value.map(({ type, img, id }) => (
          <ProductCardCarousel key={id} type={type} img={img.src} />
        ))}
      </div>
      <Button
        className={styles.roundBtnRight}
        onClick={()=>handleClick(true)}
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        }
        type="round"
      />
    </div>
  );
};

export default ProductContext(ProductCarousel);
