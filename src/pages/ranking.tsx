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
  const getUsergit = async()=>{
      try {
          const{data} = await axios.get<GetUsergitResponse>(
              'api 주소', //api 주소 여기다가 넣기
              {
                  headers : {
                      Accept: 'application/json',
                  },
              },
          );
          console.log(JSON.stringify(data, null, 2));
          return data.data[0].;
      } catch (error){
          if(axios.isAxiosError(error)){
              console.log('error message: ', error.message);
              return error.message;
          }else{
              console.log('unexpected error: ', error);
              return '이거는 unexpected error';
          }
      }
  }
  getUsergit();

  // 랭킹컴포넌트 컬러
  const tenColor = [
    '#190025',
    '#2A1039',
    '#3C285C',
    '#4D3F7F',
    '#5D57A2',
    '#8060DC',
    '#B27BFF',
    '#C99DFF',
    '#E68DFF',
    '#F5D7FF',
  ];

  // 랭킹데이터 컴포넌트 객체
  const RankShow = () => {
    return getUsergit.data.map((d, index) => (
      <RankBox backgroundColor={tenColor[index]} key={index}>
        <span>{d.index+1}</span>
        <span>{d.name1} + '❤️' + {d.name2}</span>
        <span>{d.score} + '점'</span>
      </RankBox>
    ));
  };

  return (
    <RankingLayout>
      <RankTitle>나와 찰떡궁합 깃허브는?</RankTitle>
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

// response?.data?.map((d, index) => {
//   return (
//     <mappingWrapper props={index}>
//       <span>d.index +1</span>
//       <span>d.name</span>
//       <span>d.</span>
//     </mappingWrapper>
//   );
// });

// const mappingWrapper = styled.div`
//   background-color: tenColor[index];
// `;
