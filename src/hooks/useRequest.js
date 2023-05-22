import { message } from 'antd';

const { REACT_APP_SECRET_URL } = process.env;

export const useRequest = () => {

  const warning = (error) => {
    message.warning(error || 'No');
  }

  const request = async ({
    me,
    url,
    method = 'GET',
    body,
    headers,
    token,
  }) => {

    if (token) headers.Authorization = `Bearer ${localStorage.getItem('token')},`;

    const option = {
      method,
      headers: { ...headers, 'Content-type': 'application/json' },
      body: JSON.stringify(body)
    }

    try {
      let res = await fetch(`${me ? 'http://localhost:8081/api' : REACT_APP_SECRET_URL}${url}`, option)
        .then((res) => res.json())
      return res;
    } catch (error) {
      warning(error);
      return error;
    }
  }

  return request;
}

export default useRequest;