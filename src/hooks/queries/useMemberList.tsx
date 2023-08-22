import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import usersApi from '@/apis/usersApi';
import memberKeys from '@/hooks/queries/memberKeys';

interface IUser {
  id: number;
  username: string;
  email: string;
  status: string;
  name: string;
  birth_date: string;
  ci: string;
  gender: string;
  mobile_number: string;
  created_date: string;
  recent_date: string;
}

interface IPage {
  is_first_page: boolean;
  is_last_page: true;
  request_page: string;
  request_size: number;
  total_data_cnt: number;
  total_pages: number;
}

interface IUserListResponse {
  page: IPage[];
  user_list: IUser[];
}

const useMemberList = (page: number, size: number) => {
  // Define the query key
  const queryKey = memberKeys.list();

  // Use the useQuery hook to fetch the data
  const { isLoading, data, error } = useQuery<AxiosResponse<IUserListResponse>, AxiosError>(
    [queryKey, page, size],
    async () => {
      try {
        const response = await usersApi.list(page, size);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );

  return {
    isLoading,
    data,
    error,
  };
};

export default useMemberList;
