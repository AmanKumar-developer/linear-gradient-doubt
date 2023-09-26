// Style your elements here

import styled from 'styled-components/macro'

export const GradientListItem = styled.li`
  list-style-type: none;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
  outline: none;
  width: 100%;
  border-radius: 6px;
  border: none;
  padding: 10px; 
  margin:9px
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
