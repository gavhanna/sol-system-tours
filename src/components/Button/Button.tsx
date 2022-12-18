import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
