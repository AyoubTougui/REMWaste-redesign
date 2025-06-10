import PostCodeIcon from "../../assets/icons/postCodeIcon";
import { mockData } from "../../utils/mock-data";
import WasteIcon from "../../assets/icons/wasteIcon";
import styles from "./sidebar.module.scss";
import SkipIcon from "../../assets/icons/skipIcon";
import { Link } from "react-router-dom";
import { steps } from "../../utils/consts";

const SideBar = ({ selectedSkip }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.step}>
        <Link to={steps[0].url}>
          <div className={styles.stepTitle}>
            <PostCodeIcon />
            PostCode
          </div>
        </Link>
        <div className={styles.details}>
          <ul className={styles.address}>
            <li>
              <strong>City: </strong> {mockData.address.city}
            </li>
            <li>
              <strong>Street Name: </strong> {mockData.address.street_name}
            </li>
            <li>
              <strong>House/Flat Number: </strong>{" "}
              {mockData.address.flat_number}
            </li>
          </ul>
        </div>
      </li>
      <li className={styles.step}>
        <Link to={steps[1].url}>
          <div className={styles.stepTitle}>
            <WasteIcon />
            Waste Type
          </div>
        </Link>
        <div className={styles.details}>{mockData.waste_type}</div>
      </li>
      {selectedSkip && (
        <li className={styles.step}>
          <div className={styles.stepTitle}>
            <SkipIcon />
            Select Skip
          </div>
          <div className={`${styles.details} ${styles.skipDetails}`}>
            <div className={styles.skipPrice}>
              £{selectedSkip.price_before_vat}
            </div>

            {`${selectedSkip.size} Yard Skip, ${selectedSkip.hire_period_days} Day Hire`}
          </div>
        </li>
      )}
    </ul>
  );
};

export default SideBar;
