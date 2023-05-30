
const { REACT_APP_SECRET_URL } = process.env;

export const useRequest = () => {

  const request = async ({ me, url, method = 'GET', body, headers = {}, token, }) => {

    if (token) headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    const options = {
      method,
      headers: { ...headers, "Content-type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(`${me ? 'http://localhost:8081/api' : REACT_APP_SECRET_URL}${url}`, options)
      .then((res) => res.json());
  };

  return request;
};

export default useRequest;