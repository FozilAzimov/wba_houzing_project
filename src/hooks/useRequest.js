
const URL = 'http://localhost:8081/api/v1';

export const useRequest = () => {

  const request = async ({ me, url, method = 'GET', body, headers = {}, token, }) => {

    if (token) headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    const options = {
      method,
      headers: { ...headers, "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(`${me ? 'http://localhost:8081/api' : URL}${url}`, options)
      .then((res) => res.json());
  };

  return request;
};

export default useRequest;
// http://localhost:8080/api/public/auth/login