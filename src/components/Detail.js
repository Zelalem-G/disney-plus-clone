import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in fire base!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="play button" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="trailer button" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" alt="group icon" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  top: 72px;
`;

const Background = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  margin: 0px auto;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  margin-top: 150px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0px 24px;
  margin: 0px 22px 0px 0px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
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
  margin-right: 16px;
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
  // margin-top: 26px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  // margin-top: 16px;
  // max-width: 760px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
