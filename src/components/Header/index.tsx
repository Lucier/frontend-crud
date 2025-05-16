import { HeaderContainer, NavItem, NavList, StyledLink } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavList>
          <NavItem>
            <StyledLink to={'/'}>HOME</StyledLink>
          </NavItem>

          {/* <NavItem>
            <StyledLink to={'/add-user'}>CADASTRAR USUÁRIO</StyledLink>
          </NavItem> */}

          <NavItem>
            <StyledLink to={'/users'}>USUÁRIOS</StyledLink>
          </NavItem>

          {/* <NavItem>
            <StyledLink to={'/search-users'}>BUSCAR USUÁRIOS</StyledLink>
          </NavItem> */}
        </NavList>
      </nav>
    </HeaderContainer>
  )
}

export default Header
