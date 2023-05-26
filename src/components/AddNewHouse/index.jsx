import React, { useEffect, useState } from 'react';

import {
  AntTable,
  Container,
  FonIcon,
  Icons,
  Items,
  User,
  UserImg,
  Wrapper
} from './style';

import nouser from "../../assets/imgs/nouser.jpeg";
import { useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import useRequest from '../../hooks/useRequest';

export default function AddNewHouse () {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = useRequest();
  useEffect(() => {
    request({ url: `/houses/list` }).then((res) => {
      setData(res?.data || []);
    })
    // eslint-disable-next-line react-hook/exhaustive-deps
  }, []);

  const columns = [
    {
      title: <div className="subTitle">House Category</div>,
      render: (data) => {
        return <User>
          <UserImg src={(data?.attachments && data?.attachments[0]?.imgPath) || nouser} />
          <User flex>
            <div className="subTitle">{data?.category?.name || 'Aqlli uy'}</div>
            <div className="info">{data?.city}, {
              (data?.country === 'string' || data?.country) ? "Uzbekiston" : data?.country
            }</div>
            <br />
            <div className="info"><s>{data?.salePrice}</s></div>
            <div className="subTitle">{data?.price}</div>
          </User>
          <Button width={71} height={23} fontSize={10} minWidth={71}>FOR SALE</Button>
        </User>
      },
      key: 'category.name',
      width: 450,
    },
    {
      title: <div className="subTitle">Year Built</div>,
      render: (data) => <span>{data?.houseDetails?.yearBuilt}</span>,
      key: 'houseDetails.yearBuilt',
      width: 150,
    },
    {
      title: <div className="subTitle" >Price($)</div>,
      render: (data) => <span>{data?.price} $</span>,
      key: 'price',
      width: 150,
    },
    {
      title: <div className="subTitle" >Email</div>,
      render: (data) => <span>{data?.user?.email}</span>,
      key: 'user.email',
      width: 300,
    },
    {
      title: <div className="subTitle" >Action</div>,
      render: (data) => {
        return <FonIcon>
          <Icons.Edit />
          <FonIcon.Content>
            <Icons.Del />
          </FonIcon.Content>
        </FonIcon>
      },
      key: 'price',
      width: 100,
    },
  ]

  return (
    <Wrapper>
      <Items>
        <div style={{ textAlign: 'start' }} className="title">My Properties</div>
        <div style={{ textAlign: 'start' }} className="title">
          <Button onClick={() => navigate(`/myproperties/newhouse`)}>Add House</Button>
        </div>
      </Items>
      <Container>

        <AntTable dataSource={data} columns={columns} />

      </Container>
    </Wrapper>
  )
}
