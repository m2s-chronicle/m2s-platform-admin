import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import mydatasApi from '@/apis/mydatasApi';
import mydataKeys from '@/hooks/queries/mydataKeys';

interface IMydata {
  id: number;
  created_date: string;
  checkup_year: string;
  checkup_date: string;
  checkup_place: string;
  height: string;
  weight: string;
  waist: string;
  bmi: string;
  sight: string;
  hearing: string;
  blood_pressure: string;
  urinary_protein: string;
  hemoglobin: string;
  fasting_blood_sugar: string;
  total_cholesterol: string;
  hdl_cholesterol: string;
  triglyceride: string;
  ldl_cholesterol: string;
  serum_creatinine: string;
  gfr: string;
  ast: string;
  alt: string;
  ygpt: string;
  tb_chest_disease: string;
  osteoporosis: string;
  judgement: string;
  user: number;
  mydata_call_info_id: number;
}


interface IPage {
  is_first_page: boolean;
  is_last_page: boolean;
  request_page: string;
  request_size: number;
  total_data_cnt: number;
  total_pages: number;
}

interface IMydataListResponse {
  page: IPage;
  mydata_list: IMydata[];
}

const useMydataList = (page: number, size: number) => {
  // Define the query key
  const queryKey = mydataKeys.list();

  // Use the useQuery hook to fetch the data
  const { isLoading, data, error } = useQuery<AxiosResponse<IMydataListResponse>, AxiosError>(
    [queryKey, page, size],
    async () => {
      const response = await mydatasApi.list(page, size);
      return response.data;
    }
  );

  return {
    isLoading,
    data,
    error,
  };
};

export default useMydataList;
