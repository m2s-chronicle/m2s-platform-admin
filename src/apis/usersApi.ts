//TODO: THIS IS SAMPLE. Please Change api
import api from '.';

const USERS_API_URL = '/users';

const usersApi = {
  list: () => api.get(USERS_API_URL),
  detail: () => (userId: string) => api.get(`${USERS_API_URL}/${userId}`),
};

export default usersApi;
