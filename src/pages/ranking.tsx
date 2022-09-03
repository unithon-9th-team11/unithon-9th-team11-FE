import UsersLayout from '@RootComponents/UsersLayout';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

type Usergit = {
  name: string;
  score: number;
};

type GetUsergitResponse = {
  data: Usergit[];
};

const Ranking = () => {
  //axios로 데이터 get 해오기
  // const getUsergit = async()=>{
  //     try {
  //         const{data} = await axios.get<GetUsergitResponse>(
  //             'api 주소', //api 주소 여기다가 넣기
  //             {
  //                 headers : {
  //                     Accept: 'application/json',
  //                 },
  //             },
  //         );
  //         console.log(JSON.stringify(data, null, 2));
  //         return data;
  //     } catch (error){
  //         if(axios.isAxiosError(error)){
  //             console.log('error message: ', error.message);
  //             return error.message;
  //         }else{
  //             console.log('unexpected error: ', error);
  //             return '이거는 unexpected error';
  //         }
  //     }
  // }
  // getUsergit();

  //랭킹데이터 객체
  // const RankingData = (props) => {
  //     const Ranking = getUsergit.map(())
  // };

  return (
    <RankingLayout>
      <RankTitle>나와 찰떡궁합 깃허브는?</RankTitle>
      <RankBox backgroundColor="#190025" />
    </RankingLayout>
  );
};

export default Ranking;

const RankBox = styled.div<{ backgroundColor: string }>`
  width: 765px;
  height: 70px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 20px;
`;

const RankTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const RankingLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
