import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #000075;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export const NavItem = styled.li`
  margin-right: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #808080;
  }
`
