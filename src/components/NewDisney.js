import styled from "styled-components";
import { Link } from "react-router-dom";

function NewDisney() {
  return (
    <Container>
      <h4>New to disney+</h4>
      <Content>
        <Wrap>
          <Link to="/detail">
            <img src="https://ntvb.tmsimg.com/assets/p25450661_b_h8_ab.jpg?w=960&h=540" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://www.google.com/imgres?q=disney%20plus%20%2B%20movies%20and%20shows%20posters&imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2Fluca_thumbnail_image_2d04cabd.png%3Fregion%3D256%2C0%2C472%2C473&imgrefurl=https%3A%2F%2Fpress.disneyplus.com%2Fnews%2Fdisney-plus-luca-reveals-new-clip-featurette-posters&docid=PyRPaYaW57oQYM&tbnid=XzqdkAUKfbC7EM&vet=12ahUKEwiJ78i7mfaNAxUBVKQEHSemNEMQM3oECB0QAA..i&w=472&h=472&hcb=2&ved=2ahUKEwiJ78i7mfaNAxUBVKQEHSemNEMQM3oECB0QAAhttps://m.media-amazon.com/images/I/71CdJ4wsN8S.jpg" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="https://hips.hearstapps.com/hmg-prod/images/cinderella-64764751c5831.jpeg?crop=1xw:1xh;center,top&resize=980:*" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default NewDisney;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  img {
    inset: 0px;
    display: block;
    position: absolute;
    width: 100%;
    hight: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
`;
