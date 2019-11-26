import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
  background: #eee;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 70px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    align-items: flex-start;
    font-size: 30px;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: normal;
    margin-bottom: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    input {
      margin-left: 20px;

      &::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #999999;
      }

      :first-child {
        margin-left: 0;
        width: 170px;
        height: 30px;
        border-radius: 4px;
        background: #fff;
        border: 1px solid #dddddd;
        padding: 0 30px 0 12px;
      }
    }

    label {
      margin-left: 5px;
    }
  }
`;

export const Button = styled.button`
  background: ${props => props.color};
  height: 36px;
  width: 100%;
  max-width: 90px;
  border: 0;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-radius: 4px;
  transition: background 0.2s;

  div {
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }

  &:hover {
    background: ${props => darken(0.1, props.color)};
  }
`;

export const Tools = styled.div``;
