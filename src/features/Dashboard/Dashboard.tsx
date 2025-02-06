import { Header } from "../../layouts/features";
import Charts from "./Charts";
import Map from "./Map";
import styles from "./Dashboard.module.scss";
import UserSearch from "./UserSearch";
const Dashboard = () => {
  return (
    <Header>
      <div className={styles["dashboard-wrapper"]}>
        <div className={styles["dashboard-container"]}>
          <UserSearch />
          {/* <Charts /> */}
          <Map />
        </div>
      </div>
    </Header>
  );
};

export default Dashboard;
