import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./loading-state.module.scss";

const LoadingState = () => {
  return (
    <SkeletonTheme baseColor="#588b76" highlightColor="#85aa9b">
      <div className={styles.container}>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Skeleton height={350} />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default LoadingState;
