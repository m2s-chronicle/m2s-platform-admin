import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import usersApi from '@/apis/usersApi';
import memberKeys from '@/hooks/queries/memberKeys';

interface IUserDetail {
  username: string;
  email: string;
  created_date: string;
  status: string;
  finished_date: string;
  name: string;
  birth_date: string;
  gender: string;
  national: string;
  mobile_carrier_number: string;
  mobile_number: string;
  reg_no: string;
  ip_address: string;
  user_agent: string;
}

interface IUserLogin {
  id: number;
  created_date: string;
  ip_address: string;
  user_agent: string;
  success: string;
  user: number;
}

interface IMyData {
  id: number;
  created_date: string;
  // ... other fields
}

interface IUserMemberDetailResponse {
  user: IUserDetail;
  login: IUserLogin[];
  mydata: IMyData[];
}

const useMemberDetail = (userId: number) => {
  // Define the query key
  const queryKey = memberKeys.detail(userId);

  // Use the useQuery hook to fetch the data
  const { isLoading, data, error } = useQuery<AxiosResponse<IUserMemberDetailResponse>, Error>(
    [queryKey, userId],
    async () => {
      const response = await usersApi.detail(userId);
      return response.data;
    }
  );

  return {
    isLoading,
    data,
    error,
  };
};

export default useMemberDetail;
