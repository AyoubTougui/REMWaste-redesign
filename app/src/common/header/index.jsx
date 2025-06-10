import React, { useMemo } from "react";
import styles from "./header.module.scss";
import { steps } from "../../utils/consts";
import ArrowIcon from "../../assets/icons/arrowIcon";
import { Link } from "react-router-dom";

const Header = ({ currentStep, canContinue }) => {
  const previousStep = useMemo(() => {
    const index = steps.findIndex((el) => el.key === currentStep.key);
    return steps[index - 1 < 0 ? 0 : index - 1];
  }, [currentStep]);
  const nextStep = useMemo(() => {
    const index = steps.findIndex((el) => el.key === currentStep.key);
    return steps[index + 1 > steps.length - 1 ? steps.length - 1 : index + 1];
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h1 className={styles.title}>{currentStep.title}</h1>
        <div className={styles.actions}>
          <Link to={previousStep.url}>
            <button className={`${styles.btn} ${styles.back}`}>
              <ArrowIcon /> {previousStep.value}
            </button>
          </Link>
          <Link to={nextStep.url}>
            <button
              className={`${styles.btn} ${styles.continue}`}
              disabled={!canContinue}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
      {currentStep.notice && (
        <div className={styles.notice}>{currentStep.notice}</div>
      )}
    </div>
  );
};

export default Header;
