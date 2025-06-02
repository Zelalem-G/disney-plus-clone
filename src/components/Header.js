import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
`;
const Logo = styled.img`
  width: 80px;
`;
