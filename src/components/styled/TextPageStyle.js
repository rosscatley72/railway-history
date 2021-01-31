import styled from "styled-components";

export const TextPageStyle = styled.div.attrs(() => ({
  className: "jumbotron",
  style: { backgroundSize: "cover", marginBottom: "0", minHeight: "80vh" },
}))`
{
    background-size: cover;
}
  .text-panel {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000f89;
    height: auto;
    padding: 50px;
    border-radius:30px;
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
   {
    margin-bottom: 10px;
  }
  label {
    font-weight: bold;
    margin: 0;
    margin-top: 5px;
    width: 250px;
    text-align: left;
  }
  input {
    background-color: #cccccc;
    margin: 10px;
    margin-top: 0;
    width: 258px;
    padding-bottom: 0;
  }

  .instruction {
    font-size: small;
    color: #ddd;
    margin: 0;
    text-align: left;
    width: 258px;
    padding-left: 14px;
  }

  .error {
    font-size: small;
    color: #f00;
    margin: 0;
    text-align: left;
    margin-left: 5px;
    padding-left: 10px;
    padding-top: 0;
  }

  .error-container {
    display: inline-block;
    vertical-align: top;
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
