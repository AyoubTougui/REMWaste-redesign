import React from "react";
import styles from "./cards-grid.module.scss";
import { IMAGE_API_URL } from "../../../../utils/consts";
import WarningIcon from "../../../../assets/icons/warningIcon";
import CheckIcon from "../../../../assets/icons/checkIcon";

const CardsGrid = ({ items, selectedSkip, setSelectedSkip }) => {
  return (
    <div className={styles.container}>
      {items.map((el, i) => (
        <div
          className={styles.card}
          key={i}
          style={{
            backgroundImage: `url(${
              IMAGE_API_URL + "/" + el.size
            }-yarder-skip.jpg)`,
          }}
          onClick={() =>
            el.id === selectedSkip?.id
              ? setSelectedSkip(null)
              : setSelectedSkip(el)
          }
        >
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.flex}>
                <div className={styles.bullet}>{`${el.size} Yards`}</div>
                <div
                  className={`${styles.radio} ${
                    selectedSkip?.id === el.id ? styles.active : ""
                  }`}
                >
                  {selectedSkip?.id === el.id && <CheckIcon />}
                </div>
              </div>
              {!el.allowed_on_road && (
                <div className={styles.warning}>
                  <WarningIcon /> Not Allowed On The Road
                </div>
              )}
            </div>
            <div className={styles.bottom}>
              <div className={styles.price}>£{el.price_before_vat}</div>
              <div
                className={styles.hirePeriod}
              >{`${el.hire_period_days} day hire period`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
