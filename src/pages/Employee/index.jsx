import { Sidebar } from "../../components/Sidebar";
import { HomeDiv } from "./style";

export const Employee = () => {
  return (
    <HomeDiv>
      <Sidebar />
      <div className="employee-section">
        <div className="add-employee">
          <div className="title">
            <div>Employee Management</div>
            <div>Manage your employee data</div>
          </div>
          <div className="employee-action">
            <button>New Employee</button>
          </div>
        </div>
        <div className="employee-cards"></div>
      </div>
    </HomeDiv>
  );
};
