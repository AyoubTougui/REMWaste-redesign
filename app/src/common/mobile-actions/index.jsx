import React, { useMemo } from "react";
import styles from "./mobile-actions.module.scss";
import { steps } from "../../utils/consts";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/arrowIcon";

const MobileActions = ({ currentStep, canContinue }) => {
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
      <Link to={previousStep.url}>
        <button className={`${styles.btn} ${styles.back}`}>
          <ArrowIcon />
        </button>
      </Link>
      <Link to={nextStep.url} className={styles.grow}>
        <button
          className={`${styles.btn} ${styles.continue}`}
          disabled={!canContinue}
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default MobileActions;
