import { Container } from './style';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRequest from '../../hooks/useRequest';

export default function HousItem () {
  const { REACT_APP_SECRET_URL: url } = process.env;
  const params = useParams();
  const [data, setData] = useState({});
  const request = useRequest();

  useEffect(() => {
    request({ url: `${url}/houses/list/${params?.id}` })
      .then(res => {
        setData(res?.data || {});
      });
    console.log(data);
  }, [params?.id]);
  return (
    <Container>
      <h1>House Item</h1>
    </Container >
  )
}