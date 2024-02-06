import { SideBarDiv } from "./style";
import logo from "../../assets/images/msi.png";

export const Sidebar = () => {
  return (
    <SideBarDiv>
      <div className="navigators">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="navigation-btn">Dashboard</button>
        <button className="navigation-btn">Employee</button>
        <button className="navigation-btn">Job</button>
        <button className="navigation-btn">Notifications</button>
        <button className="navigation-btn">settings</button>
      </div>
    </SideBarDiv>
  );
};
