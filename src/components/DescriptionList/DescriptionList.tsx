import styles from "./DescriptionList.module.scss";
import cx from "classnames";

const DescriptionList = ({
  title,
  description,
  items,
}: {
  title?: string;
  description?: string;
  items: { label: string; value: string }[];
}) => {
  return (
    <div>
      {title && (
        <h2 className={cx(styles.descriptionList, "text-3xl")}>{title}</h2>
      )}
      {description && <p>{description}</p>}
      <dl>
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <dt className={styles.term}>{item.label}</dt>
            <dd className={styles.description}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default DescriptionList;
