import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
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
    color: #7159c1;
    display: flex;
    align-items: flex-start;
    font-size: 30px;
    margin-bottom: 20px;
  }

  h2 {
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
    justify-content: space-between;

    input {
      margin-left: 20px;

      &::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #999999;
      }

      :first-child {
        display: inline-block;
        margin-left: 0;
        width: 170px;
        height: 30px;
        border-radius: 4px;
        background: #fff;
        border: 1px solid #dddddd;
        padding: 0 30px 0 12px;

        ::before {
          font-family: 'FontAwesome';
          content: '\f274';
          position: absolute;
          right: 6px;
        }
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

export const Tools = styled.div`
  margin-top: 15px;

  li {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: #fff;
    border: 1px solid #7159c1;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 15px;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      a {
        color: #7159c1;
        font-size: 20px;

        &:hover {
          color: ${darken(0.1, '#7159c1')};
        }
      }

      button {
        background: none;
        border: 0;
        color: #7159c1;

        &:hover {
          color: ${darken(0.1, '#7159c1')};
        }
      }
    }

    p {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 20px;
    }

    span {
      font-weight: bold;
      color: #7159c1;

      &:hover {
        cursor: pointer;
        color: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;
