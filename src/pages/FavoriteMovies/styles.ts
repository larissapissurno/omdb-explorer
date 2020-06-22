import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 100%;
  line-height: 56px;
  display: inline-block;

  margin-top: 80px;
  margin-bottom: 40px;
`;

export const Movies = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 150px;

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
