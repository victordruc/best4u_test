import styles from "./style.module.css";
import Button from "../Button/Button";
import HeroText from "../HeroText/HeroText";

const Header = ({ children }) => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <HeroText>KArhu summer camp</HeroText>

        <Button
          className={styles.primaryBtn}
          component="Shop Collection"
          type="primary"
        />
        
        <Button
          className={styles.roundBtn}
          component={
            <a href="#carousel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill="white"
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
            </a>
          }
          type="round"
        />
        
      </div>
    </header>
  );
};

export default Header;
