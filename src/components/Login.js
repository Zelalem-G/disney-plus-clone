import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <Signup>GET ALL THERE</Signup>
        <Description>
          sunb tirl mijtsn onsdjs knssn oer jnf v skdnajdnsk odbsa jd res jnfvs
          vskndonwe ksdnyq nzxc kwjdc sn namdaujf awe sajd a fewk dns acjac ak
          cdj.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 70px);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 0.7;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  text-align: center;
  border-radius: 4px;
  color: #f9f9f9;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
