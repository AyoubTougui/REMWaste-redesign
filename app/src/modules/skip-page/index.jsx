import React, { useState } from "react";
import Layout from "../../common/layout";
import { useGetSkips } from "./api/useGetSkips";
import LoadingState from "./components/loading-state";
import styles from "./skip-page.module.scss";
import CardsGrid from "./components/cards-grid";

const SkipPage = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const { data, isLoading } = useGetSkips();

  return (
    <Layout selectedSkip={selectedSkip}>
      <div className={styles.container}>
        {isLoading && <LoadingState />}
        {!isLoading && data?.data && (
          <CardsGrid
            items={data.data}
            setSelectedSkip={setSelectedSkip}
            selectedSkip={selectedSkip}
          />
        )}
        {!isLoading && !data && (
          <div className={styles.notFound}>{"No Data found :("}</div>
        )}
      </div>
    </Layout>
  );
};

export default SkipPage;
