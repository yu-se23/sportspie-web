import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import TeamSelectList from './TeamSelectList';

const DetailPage = () => {  
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://115.85.182.229:8080/api/game/detail/${id}`);
        setPost(response.data);
      } catch (error) { // 서버 통신 오류 발생시 경고창 출력
        console.error("서버에서 데이터를 불러오지 못했습니다.", error);
          Swal.fire({
            icon: 'error',
            title: '통신 오류',
            text: '서버에서 데이터를 불러오는데 실패하였습니다. 다시 시도해 주십시오'
          });
          navigate('./Home');
      }
    };
    fetchPost();
    }, [id]);
    return (
      <Container>
        <ImageContainer>       
            <FieldImage src={post.stadium?.imageUrl}/>
        </ImageContainer>
        <ContentContainer>
          <TitleText>{post.title}</TitleText><br/>
          <PlaceText>경기장 : {post.stadium?.name}</PlaceText>
          <ParticipantNumberText>최대 경기 인원 : {post.maxCapacity}</ParticipantNumberText>
          <DateText>경기 시작 시간 : {post.startedAt}</DateText>
          <WeatherText>경기 당일 날씨 : {post.stadium?.weatherType}</WeatherText>
          <BlackLine/>
          <MainText>
            {post.content}
          </MainText>
        </ContentContainer>
        <TeamSelectionUI>{<TeamSelectList/>}</TeamSelectionUI>
        <ButtonContainer>
          <DeadlineButton>인원 확정</DeadlineButton>
          <ConfirmationButton>결과 확정</ConfirmationButton>
        </ButtonContainer>
      </Container>
    );
  };
  
  const Container = styled.div`
    width:100%;
    height:auto;
    background-color: white;
  `;
  
  const ImageContainer = styled.div`
    width:100%;
    height:40vh;
    display: flex;
    justify-content: center;
  `;

  const FieldImage = styled.img`
    width:90%;
    height:100%;
    margin-top: 5%;
    border-radius: 10px;
  `;
  
  const ContentContainer = styled.div`
    width:82.5%;
    height: auto;
    margin-left: 5%;
    background-image: linear-gradient(to top left, #f5f5f5, #f5f5f5);
    border-radius: 15px;
    font-size: 1em;
    font-weight: 1000;
    margin-top: 10%;
    text-align: left;
    padding: 1em;
  `;

  const BlackLine = styled.div`
    background-color: black;
    height: 0.125vh;
    margin-bottom: 1vh;
  `;

  const TitleText = styled.div`
    text-align: center;
    font-size: 1.2em;
    background-color: white;
    border-radius: 10px;
    padding-top: 1vh;
    padding-bottom: 1vh;
  `;

  
  const PlaceText = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0.5vh;
    margin-bottom: 1vh;
  `;

  const ParticipantNumberText = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0.5vh;
    margin-bottom: 1vh;
  `;

  const DateText = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0.5vh;
    margin-bottom: 1vh;
  `;

  const WeatherText = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 0.5vh;
    margin-bottom: 1vh;
  `;

  const MainText = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1vh;
    font-size: 0.8em;
    font-weight: 500;
    height: auto;
  `;
  
  const TeamSelectionUI = styled.div`
    width: 90%;
    height: auto;
    margin-left: 5%;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-top: 5%;
  `;
  
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7.5%;
    margin-bottom: 7.5%;
  `;  

  const DeadlineButton = styled.button`
    margin-left: 5%;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    border-color: white;
    width: 30%;
    height: 6vh;
  `; 

  const ConfirmationButton = styled.button`
    margin-right: 5%;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    border-color: white;
    width: 30%;
    height: 6vh;
  `;  

export default DetailPage;