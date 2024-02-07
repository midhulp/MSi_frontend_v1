import { Sidebar } from "../../components/Sidebar";
import { HomeDiv } from "./style";

export const Employee = () => {
  return (
    <HomeDiv>
      <Sidebar />
      <div className="employee-section">
        <div className="add-employee">
          <div className="whole-titles">
            <div className="title">
              <div className="employee-title">Employee Management</div>
              <div className="employee-desc">Manage your employee data</div>
            </div>
            <div className="employee-action">
              <button className="add-button">New Employee</button>
            </div>
          </div>
        </div>
        <div className="employee-cards"></div>
      </div>
    </HomeDiv>
  );
};
