import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 24px;
  min-height: calc(100vh - 150px);
  margin-top: 40px;

  button {
    float: right;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  p,
  span {
    color: #aeaeae;
  }
`;

export const HeaderMainData = styled.div`
  display: flex;
  img {
    border-radius: 5px;
    margin-top: -70px;
    height: 170px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(204, 204, 204, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(204, 204, 204, 1);
    box-shadow: 0px 0px 15px 0px rgba(204, 204, 204, 1);
  }

  div {
    margin-left: 10px;

    h1 {
      font-weight: 400;
    }

    span {
      line-height: 2rem;
    }

    svg:first-child {
      color: #efbe46;
    }

    svg:nth-child(2n) {
      margin-left: 30px;
      margin-top: 2px;
    }
  }
`;

export const HeaderDescription = styled.p`
  font-size: 20px;
  color: #aeaeae;
  margin: 50px 0;
`;

export const Genre = styled.span`
  font-weight: 200;
  font-size: 14px;
  color: #aeaeae;
  border: 1.2px solid #aeaeae;
  border-radius: 3px;
  padding: 5px;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Content = styled.div``;

export const ButtonBack = withStyles({
  root: {
    float: 'right',
    marginTop: '-60px',
    marginRight: '20px',
  },
})(Button);
