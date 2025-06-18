import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://ntvb.tmsimg.com/assets/p25450661_b_h8_ab.jpg?w=960&h=540" />
        </Wrap>
        <Wrap>
          <img src="https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://www.google.com/imgres?q=disney%20plus%20%2B%20movies%20and%20shows%20posters&imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2Fluca_thumbnail_image_2d04cabd.png%3Fregion%3D256%2C0%2C472%2C473&imgrefurl=https%3A%2F%2Fpress.disneyplus.com%2Fnews%2Fdisney-plus-luca-reveals-new-clip-featurette-posters&docid=PyRPaYaW57oQYM&tbnid=XzqdkAUKfbC7EM&vet=12ahUKEwiJ78i7mfaNAxUBVKQEHSemNEMQM3oECB0QAA..i&w=472&h=472&hcb=2&ved=2ahUKEwiJ78i7mfaNAxUBVKQEHSemNEMQM3oECB0QAAhttps://m.media-amazon.com/images/I/71CdJ4wsN8S.jpg" />
        </Wrap>
        {/* <Wrap>
          <img src="https://hips.hearstapps.com/hmg-prod/images/cinderella-64764751c5831.jpeg?crop=1xw:1xh;center,top&resize=980:*" />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
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
    width: 100%;
    hight: 100%;
    object-fit: cover;
  }
`;
