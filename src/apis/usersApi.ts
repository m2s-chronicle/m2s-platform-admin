//TODO: THIS IS SAMPLE. Please Change api
import api from '.';

const USERS_API_URL = '/manager/users';

const usersApi = {
  list: (page: number, size: number) => {
    return api.get(`/manager/user?page=${page}&size=${size}`);
  },
  detail: (userId: number) => {
    console.log('userId', userId);
    return api.get(`/manager/user/${userId}`);
  },
};

export default usersApi;
