import styled, { css } from 'styled-components';

export const theme = { primarycolor: '#25CCF7', secondarycolor: '#58B19F' };

export const Button = styled.button`
  background-color: ${props => props.theme.secondarycolor};
  border: none;
  color: white;
  padding: 0.8rem 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #25e6b5;
  }
  ${props =>
    props.danger &&
    css`
      background: palevioletred;
      &:hover {
        background-color: #ff83ac;
      }
    `};
  ${props =>
    props.smalldanger &&
    css`
      background: palevioletred;
    `};
`;
