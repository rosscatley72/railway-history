import styled from "styled-components";

export const TextPageStyle = styled.div.attrs(() => ({
  className: "jumbotron",
  style: { backgroundSize: "cover", marginBottom: "0", minHeight: "80vh" },
}))`
  .text-panel {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000f89;
    height: auto;
    padding: 50px;
  }

.element-holder{
    margin-left:auto;
    margin-right:auto;
    display:inline-block;
}

  form {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width:700px;
    background-color: rgba(0,0,0,0.3);
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
    border-color: #000f89;
    padding: 0;
    padding-bottom:20px;
    padding-top:20px;
    text-align: center;

    }
  }
`;

export const Title = styled.div.attrs(() => ({
  className: "display-4 text-center",
}))`
  padding: 30px;
`;

export const FormElement = styled.div`
  label {
    font-weight: bold;
    margin: 10px;
    margin-bottom:0;
    margin-left:0;
    width: 250px;
    text-align:left;
  }
  input {
    background-color: #b7b4ad
    margin: 10px;
    margin-top:0;
    width:258px;
    
  }

`;

export const StyledButton = styled.button.attrs(() => ({
  className: "btn",
}))`
   {
    background-color: #000f89;
    color: #b7b4ad;
    margin-top: 30px;
    padding: 15px;
    width: 150px;

    &:hover {
      color: #f9f1de;
      background-color: rgba(128, 16, 38, 1);
    }
  }
`;
