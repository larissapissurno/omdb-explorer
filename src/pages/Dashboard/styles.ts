import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 100%;
  line-height: 56px;
  display: inline-block;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 100%;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #ffffff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #3f51b5;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#3f51b5')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Movies = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    background: #fff;
    border-radius: 5px;
    max-width: 260px;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 215px;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      width: auto;
      height: 200px;
    }

    div {
      text-align: center;
      margin-top: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const MyFavsButton = withStyles({
  root: {
    float: 'right',
    marginTop: 100,
    minWidth: 150,
    justifyContent: 'space-between',
  },
})(Button);
