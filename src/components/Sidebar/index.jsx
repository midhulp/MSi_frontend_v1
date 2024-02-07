import { SideBarDiv } from "./style";
import logo from "../../assets/images/msi.png";
import { ReactComponent as Logout } from "../../assets/svg/Logout.svg";

export const Sidebar = () => {
  return (
    <SideBarDiv>
      <div className="navigators">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="btns">
          <button className="navigation-btn">Dashboard</button>
          <button className="navigation-btn">Employee</button>
          <button className="navigation-btn">Jobs</button>
          <button className="navigation-btn">Notifications</button>
          <button className="navigation-btn">Settings</button>
          <div className="report-section">
            <p className="report">Reports</p>
            <button className="navigation-btn">Production</button>
            <button className="navigation-btn">Transactions</button>
            <button className="navigation-btn">Invoices</button>
          </div>
        </div>
      </div>
      <div className="user">
        <button className="logout-btn">
          <div className="logout-svg">
            <Logout />
          </div>
          Logout
        </button>
      </div>
    </SideBarDiv>
  );
};
