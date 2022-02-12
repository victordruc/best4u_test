import styles from "./style.module.css";

const Button = (props) => {
  const { component, className, type, ...rest } = props;

  let newClassName = className || "";
  switch (type) {
    case "primary":
      newClassName += " " + styles.primary;
      break;
    case "round":
      newClassName += " " + styles.round;
      break;
  }

  return <button className={newClassName} {...rest}>{component}</button>;
};

export default Button;
