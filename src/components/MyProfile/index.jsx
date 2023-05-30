import React from 'react';

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
import { useQuery } from 'react-query';
import { message } from 'antd';

export default function MyProfile () {
  const { REACT_APP_SECRET_URL: url } = process.env;

  const navigate = useNavigate();

  const { data, refetch } = useQuery([], () => {
    return (
      fetch(`${url}/houses/me`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => res.json()));
  });

  const onDelete = (id) => {
    fetch(`${url}/houses/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
      .then(res => {
        if (res.success) {
          refetch();
          message.info('House Deleted');
        }
      });
  }

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
            <div className="info"><s>{data?.salePrice} $</s></div>
            <div className="subTitle">{data?.price} $</div>
          </User>
          <Button width={71} minWidth={71} height={23} fontSize={10}>FOR SALE</Button>
        </User>
      },
      key: 'category.name',
      width: 500,
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
      width: 250,
    },
    {
      title: <div className="subTitle" >Action</div>,
      render: (data) => {
        return <FonIcon>
          <Icons.Edit onClick={(event) => {
            event.stopPropagation();
            return navigate(`/myprofile/edithouse/${data?.id}`)
          }} />
          <FonIcon.Content>
            <Icons.Del onClick={(event) => {
              event.stopPropagation();
              onDelete(data?.id)
            }} />
          </FonIcon.Content>
        </FonIcon>
      },
      key: 'action',
      width: 100,
    },
  ]

  return (
    <Wrapper>
      <Items>
        <div style={{ textAlign: 'start' }} className="title">My Profile</div>
        <div style={{ textAlign: 'start' }} className="title">
          <Button onClick={() => navigate(`/myprofile/newhouse`)}>Add House</Button>
        </div>
      </Items>
      <Container>

        <AntTable
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`)
              }
            }
          }}
          dataSource={data?.data}
          columns={columns} />

      </Container>
    </Wrapper>
  )
}
