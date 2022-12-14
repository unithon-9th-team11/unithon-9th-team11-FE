import UsersLayout from '@RootComponents/UsersLayout';
import Link from 'next/link';
import axios from 'axios';
import styled from 'styled-components';

type Usergit = {
  name1: string;
  name2: string;
  score: number;
};

type GetUsergitResponse = {
  data: Usergit[];
};

const Ranking = () => {
  //   //axios로 데이터 get 해오기
  //   const getUsergit = async()=>{
  //       try {
  //           const{data} = await axios.get<GetUsergitResponse>(
  //               'api 주소', //api 주소 여기다가 넣기
  //               {
  //                   headers : {
  //                       Accept: 'application/json',
  //                   },
  //               },
  //           );
  //           console.log(JSON.stringify(data, null, 2));
  //           return data.data;
  //       } catch (error){
  //           if(axios.isAxiosError(error)){
  //               console.log('error message: ', error.message);

  //           }else{
  //               console.log('unexpected error: ', error);

  //           }
  //       }
  //   }
  //   getUsergit();

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

  const mockData = {
    1: 'djdj',
    2: 'djdj',
    3: 'dfdf',
    4: 'dfdf',
    5: 'dfdfdf',
    6: 'dfsdfadf',
    7: 'dfdfdf',
    8: 'dfadfsa',
    9: 'dfdfdf',
    10: 'dfdf',
  };

  // // 랭킹데이터 컴포넌트 객체
  // const RankShow = () => {

  //   return await getUsergit?.data?.map((d, index) => (
  //     <RankBox backgroundColor={tenColor[index]} key={index}>
  //       <span>{d.index+1}</span>
  //       <span>{d.name1} + '❤️' + {d.name2}</span>
  //       <span>{d.score} + '점'</span>
  //     </RankBox>
  //   ));
  // };

  const MockData = [
    {
      name1: 'S32f',
      name2: 's45kf',
      score: 931,
    },
    {
      name1: 'l2sdin',
      name2: 'dk224cfo',
      score: 852,
    },
    {
      name1: 'dnd2',
      name2: 'Asdsad',
      score: 837,
    },
    {
      name1: 'ff2',
      name2: 'l353',
      score: 834,
    },
    {
      name1: 'j2',
      name2: 'f2dss',
      score: 555,
    },
    {
      name1: 'Awer032as',
      name2: 'esfdsad',
      score: 466,
    },
    {
      name1: 'Devlopsas',
      name2: 'Amasr2',
      score: 277,
    },
    {
      name1: '3ddddevvf',
      name2: 'af308hf',
      score: 188,
    },
    {
      name1: 'dkssud02323',
      name2: 'linkdevee',
      score: 99,
    },
    {
      name1: 'ghoon99',
      name2: 'extts',
      score: 10,
    },
  ];

  const MockUp = () => {
    // const mockData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return MockData.map((item, index) => (
      <RankBox backgroundColor={tenColor[index]} key={index}>
        <span>{index + 1}</span>
        <span>
          {item.name1} ❤️ {item.name2}
        </span>
        <span>{item.score}점</span>
      </RankBox>
    ));
  };

  return (
    <RankingLayout>
      <RankTitle>나와 찰떡궁합 깃허브는?</RankTitle>
      {/* {RankShow()} */}
      {MockUp()}
    </RankingLayout>
  );
};

export default Ranking;

const RankBox = styled.div<{ backgroundColor: string }>`
  width: 765px;
  height: 70px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  margin: 15px auto;
  .span {
    display: flex;
  }
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
