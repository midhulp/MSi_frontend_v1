import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;

  .employee-section {
    width: 100%;
    display: flex;
    background-color: #f9f9f9;
  }

  .add-employee {
    width: 100%;
    display: flex;
    padding: 0px 30px;
  }

  .whole-titles {
    width: 100%;
    border-radius: 16px;
    height: 100px;
    margin: 20px;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    display: flex;
  }

  .title {
    padding-left: 16px;
  }

  .employee-title {
    font-family: "Inter";

    width: 365px;
    height: 36px;
    font-family: "Inter";
    font-weight: 600;
    font-size: 30px;
    display: flex;
    align-items: center;
  }

  .employee-desc {
    font-size: 16px;
    font-weight: 400;
    font-family: "Inter";
    color: #667085;
  }

  .employee-action {
    padding: 10px 16px;

    .add-button {
      background: #e38246;
      color: #f9fafb;
      width: 165px;
      height: 46px;
      border-radius: 8px;
      font-size: 14px;
      font-family: "Inter";
      font-weight: 600;
      border: 0;
    }
  }
`;
