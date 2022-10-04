import styled from 'styled-components'

export const Button = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 200;
  font-size: 2em;
  background-color: ${({bg}) => bg || '#000'};
  color: ${({color}) => color || '#fff'};
  &:hover {
    opacity: 0.7;
  }
`

export const ProjectButton = styled(Button)`
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#000'};
  font-size: 1.8em;
`