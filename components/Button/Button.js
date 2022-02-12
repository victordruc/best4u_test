import styles from "./style.module.css";

const Button = (props) => {
  const { component, type } = props;

  let className = props.className || "";
  switch (type) {
    case "primary":
      className += " " + styles.primary;
      break;
    case "round":
      className += " " + styles.round;
      break;
  }

  return <button className={className}>{component}</button>;
};

export default Button;
