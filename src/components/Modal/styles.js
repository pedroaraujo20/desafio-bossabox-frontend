import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 30px;
  width: 450px;

  form {
    > span {
      display: block;
      color: #ee4d64;
      align-self: flex-start;
      font-weight: bold;
      margin-top: -15px;
      margin-bottom: 20px;
    }
  }

  > div {
    display: flex;
    margin-bottom: 30px;
    h1 {
      font-weight: normal;
      font-size: 16px;

      margin-left: 5px;
    }
  }

  label {
    display: block;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444444;
  }

  input {
    margin-top: 8px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
    height: 45px;
    background: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 13px 15px;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #999999;
    }
  }
`;
