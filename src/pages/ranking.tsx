import UsersLayout from '@RootComponents/UsersLayout';
import Link from 'next/link';
import axios from 'axios';

type Usergit = {
  name: string;
};

type GetUsergitResponse = {
  data: Usergit[];
};

const Ranking = () => {
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
            return data;
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
  return (
  <UsersLayout>
      
  </UsersLayout>
  )
};

export default Ranking;
