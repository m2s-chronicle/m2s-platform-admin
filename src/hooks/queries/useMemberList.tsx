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
};

interface IUserListResponse {
  page_info: IPage[];
  user_list: IUser[];
}

const useMemberList = (page: number) => {
  // Define the query key and fetch function
  const queryKey = memberKeys.list();
  const fetchFunction = async () => {
    try {
      const response = await usersApi.list(page); // Pass the page parameter to the API call
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Use the useQuery hook to fetch the data
  const { isLoading, data, error } = useQuery<AxiosResponse<IUserListResponse>, AxiosError>(queryKey, fetchFunction);

  return {
    isLoading,
    data,
    error,
  };
};

export default useMemberList;