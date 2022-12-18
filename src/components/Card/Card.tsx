import styles from "./Card.module.scss";
import cx from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={cx(styles.card, className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
