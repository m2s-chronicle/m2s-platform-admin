import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import usersApi from '@/apis/usersApi';
import memberKeys from '@/hooks/queries/memberKeys';

interface IFakeMemberProps {
  id: number;
  email: string;
  username: string;
  password: string;
  address: {
    geolocation: IFakeGeoLocation;
  };
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

interface IFakeGeoLocation {
  lat: string;
  long: string;
}

const useMemberList = () => {
  return useQuery<AxiosResponse<IFakeMemberProps[]>, AxiosError>(memberKeys.list(), usersApi.list);
};

export default useMemberList;
