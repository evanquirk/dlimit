import styled from 'styled-components'

export const Button = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 2em;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#000'};
  &:hover {
    opacity: 0.6;
  }
`