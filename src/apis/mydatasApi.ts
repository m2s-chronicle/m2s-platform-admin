//TODO: THIS IS SAMPLE. Please Change api
import api from '.';

const mydatasApi = {
  list: (page: number, size: number) => {
    return api.get(`/manager/mydata?page=${page}&size=${size}`);
  },
};

export default mydatasApi;
