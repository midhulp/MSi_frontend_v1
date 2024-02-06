import styled from "styled-components";

export const SideBarDiv = styled.div`
  width: 250px;
  // min-width: 150px;
  height: 100vh;
  background: black;
  position: sticky;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Noah";

  .logo{
       width:136px;
       height:53px;

    img{
        // padding: 65px;
        width:136px;
        height:53px;
    }
}

  .navigators {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;

    .navigation-btn {
        font-family: Noah;
        cursor: pointer;
        text-align: inherit;
        width: 100%;
        font-size: 16px;
        background: none;
        border: none;
        column-gap: 10px;
        display: flex;
        justify-content: space-between;
        outline: none;
        color:white;
    }
    

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
