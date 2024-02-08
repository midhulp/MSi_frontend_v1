import { SideBarDiv } from "./style";
import logo from "../../assets/images/msi.png";
import { ReactComponent as Logout } from "../../assets/svg/Logout.svg";
import { ReactComponent as Dashboard } from "../../assets/svg/Dashboard.svg";
import { ReactComponent as Employee } from "../../assets/svg/Employee.svg";
import { ReactComponent as Production } from "../../assets/svg/Production.svg";
import { ReactComponent as Job } from "../../assets/svg/Job.svg";
import { ReactComponent as Notification } from "../../assets/svg/Notification.svg";
import { ReactComponent as Setting } from "../../assets/svg/Setting.svg";
import { ReactComponent as Transaction } from "../../assets/svg/Transaction.svg";
import { ReactComponent as Invoice } from "../../assets/svg/Invoice.svg";

export const Sidebar = () => {
  return (
    <SideBarDiv>
      <div className="navigators">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="btns">
          <button className="navigation-btn">
            <Dashboard />
            <div className="btn-desc">Dashboard</div>
          </button>
          <button className="navigation-btn">
            <Employee />
            <div className="btn-desc">Employee</div>
          </button>
          <button className="navigation-btn">
            <Job />
            <div className="btn-desc">Jobs</div>
          </button>
          <button className="navigation-btn">
            <Notification />
            <div className="btn-desc">Notifications</div>
          </button>
          <button className="navigation-btn">
            <Setting />
            <div className="btn-desc">Settings</div>
          </button>
          <div className="report-section">
            <p className="report">Reports</p>
            <button className="navigation-btn">
              <Production />
              <div className="btn-desc">Production</div>
            </button>
            <button className="navigation-btn">
              <Transaction />
              <div className="btn-desc">Transactions</div>
            </button>
            <button className="navigation-btn">
              <Invoice />
              <div className="btn-desc">Invoices</div>
            </button>
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
