//TODO: THIS IS SAMPLE. Please Change api
import api from '.';

const USERS_API_URL = '/manager/users';

const usersApi = {
  list: (page: number) => {
    return api.get(`/manager/user?page=${page}`);
  },
  detail: () => (userId: string) => api.get(`${USERS_API_URL}/${userId}`),
};

export default usersApi;
