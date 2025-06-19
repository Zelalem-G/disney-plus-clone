import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/slider-badag.jpg" />
      </Background>
      <ImageTitle>
        <img src="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>Place holder text that we will update. comprende?</SubTitle>
      <Description>
        sunb tirl mijtsn onsdjs knssn oer jnf v skdnajdnsk odbsa jd res jnfvs
        vskndonwe ksdnyq nzxc kwjdc sn namdaujf awe sajd a fewk dns acjac ak cdj
        dksducs csd ci rgn,gr ig resnoienfkandad vandndjac ajndia dcankbsm
        czdbjsu a djainewjnfsk dsjbacjdsakm.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  margin-top: 60px;
  min-height: 170px;
  width: 35vh;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0px 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  height: 44px;
  width: 44px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);

  span {
    color: white;
    font-size: 30px;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
  color: rgb(249, 249, 249);
`;
