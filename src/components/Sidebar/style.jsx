import styled from "styled-components";

export const SideBarDiv = styled.div`
  width: 250px;
  height: 100vh;
  background: black;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navigators {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  .logo {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 120px;

    img {
      width: 120px;
      height: 120px;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .report-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .report {
    color: #8c8c8c;
    font-weight: 600;
    margin-left: 8px;
    margin-top: 20px;
  }

  .navigation-btn {
    font-family: Noah;
    cursor: pointer;

    width: 100%;
    font-size: 16px;
    background: none;
    border: none;
    column-gap: 10px;
    display: flex;
    justify-content: space-between;
    outline: none;
    color: white;
  }

  .user {
    padding: 8px;
    display: flex;
  }

  .logout-btn {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
    align-items: center;
    height: 45px;
    font-family: "Inter";
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    background: #474747;
    border-radius: 6px;
    color: #ffffff;
  }

  .logout-svg {
    margin-left: 25px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
