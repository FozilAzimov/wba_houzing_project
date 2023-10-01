import React, { useEffect, useState } from 'react';

import {
  IconDel,
  MenuWrapper,
  Section,
  SelectAntd,
  Wrapper
} from './style';

import { Button, Input } from '../Generic';
import { useFormik } from 'formik';
import { Checkbox, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate, useParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';

export default function AddNewHouse () {
  const url = 'http://localhost:8081/api/v1';

  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState('');
  const request = useRequest();
  const navigate = useNavigate();
  const { id } = useParams();

  // Initial Values
  const [initial, setInitial] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    categoryId: 1,
    name: 'webbrain',
    attachments: images,
    locations: {
      latitude: 0,
      longitude: 0
    },
  });

  // singlHouse
  useEffect(() => {
    request({ url: `/houses/id/${id}`, token: true }).then((res) => {
      setImages(res?.data?.attachments || [])
      setInitial({ ...res?.data });
    });

    // eslint-disable-next-line
  }, []);


  // category
  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
      .then(res => setCategory(res?.data || []))

    // eslint-disable-next-line
  }, []);

  // Formik
  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,

    onSubmit: (values) => {
      console.log(values, 'vll');
      request({
        url: id ? `/houses/${id}` : `/houses`,
        method: id ? "PUT" : "POST",
        token: true,
        body: {
          ...values,
          attachments: images
        },
      }).then((res) => {
        if (res?.success) {
          message.info('House Added');
          navigate("/myprofile");
        }
        else message.error('Error, There is an error in the information being added!');
      });
    }
  });

  const addImg = () => {
    if (img) {
      setImages([...images, { imgPath: img }]);
      setImg('');
    }
  }

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className='subTitle'>Address</h1>
          <Section>
            <Input
              name='country'
              placeholder='Country'
              onChange={formik.handleChange}
              value={formik.values.country} />

            <Input
              name='region'
              placeholder='Region'
              onChange={formik.handleChange}
              value={formik.values.region} />

            <Input
              name='city'
              placeholder='City'
              onChange={formik.handleChange}
              value={formik.values.city} />

            <Input
              name='address'
              placeholder='Address'
              onChange={formik.handleChange}
              value={formik.values.address} />
          </Section>

          <h1 className='subTitle'>Apartment info</h1>
          <Section wrap>
            <Input
              width={100}
              type='number'
              name='houseDetails.area'
              placeholder='Area'
              value={formik.values?.houseDetails?.area}
              onChange={formik.handleChange}
            />
            <Input
              width={100}
              type='number'
              name='houseDetails.bath'
              placeholder='Bath'
              value={formik.values?.houseDetails?.bath}
              onChange={formik.handleChange}
            />
            <Input
              width={100}
              type='number'
              name='houseDetails.beds'
              placeholder='Beds'
              value={formik.values?.houseDetails?.beds}
              onChange={formik.handleChange}
            />
            <Input
              width={100}
              type='number'
              name='houseDetails.yearBuilt'
              placeholder='Year Build'
              value={formik.values?.houseDetails?.yearBuilt}
              onChange={formik.handleChange}
            />
            <Input
              width={100}
              type='number'
              name='houseDetails.garage'
              placeholder='Garage'
              value={formik.values?.houseDetails?.garage}
              onChange={formik.handleChange}
            />
            <Input
              width={100}
              type='number'
              name='houseDetails.room'
              placeholder='Room'
              value={formik.values?.houseDetails?.room}
              onChange={formik.handleChange}
            />

            <SelectAntd defaultValue={'Select Category'}>
              <SelectAntd.Option value={''}>Select Category</SelectAntd.Option>
              {
                category?.map(value => {
                  return <SelectAntd.Option onChange={formik.handleChange} key={value.id}>
                    {value?.name || 'Select'}
                  </SelectAntd.Option>
                })
              }
            </SelectAntd>
          </Section>

          <h1 className='subTitle'>Price</h1>
          <Section>
            <Input
              name='name'
              placeholder='Name'
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Input
              name='zipCode'
              placeholder='Zip Code'
              value={formik.values.zipCode}
              onChange={formik.handleChange}
            />
            <Input
              type='number'
              name='price'
              placeholder='Price'
              value={formik.values.price}
              onChange={formik.handleChange} />
            <Input
              type='number'
              name='salePrice'
              placeholder='Sale Price'
              value={formik.values.salePrice}
              onChange={formik.handleChange} />
          </Section>

          <Section>
            <Input onChange={({ target: { value } }) => setImg(value)} value={img} placeholder='Add Imge URL' />
            <Button onClick={addImg} width={250} type={'button'}>Add Imge URL</Button>
          </Section>

          <Section column>
            {
              images?.map((value, index) => {
                return <pre key={index}>
                  {value?.imgPath}
                  <IconDel onClick={() => {
                    let res = images?.filter(val => val !== value);
                    setImages(res);
                  }} />
                </pre>
              })
            }
          </Section>

          <Section>
            <TextArea onChange={formik.handleChange} value={formik.values?.description} placeholder='Description...' name='description' />
          </Section>
        </MenuWrapper>

        <MenuWrapper>
          <div className="subTitle">Additional</div>
          <Section flex>
            <Section column>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.busStop' >Bus Stop</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.garden' >Garden</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.market' >Market</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.park' >Park</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.parking' >Parking</Checkbox>
            </Section>
            <Section column>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.school' >School</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.stadium' >Stadium</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.subway' >Subway</Checkbox>
              <Checkbox onChange={formik.handleChange} name='homeAmenitiesDto.superMarket' >Super Market</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.tv' >TV</Checkbox>
            </Section>
            <Section column>
              <Checkbox onChange={formik.handleChange} name='componentsDto.airCondition' >Air Condition</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.courtyard' >Countryard</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.furniture' >Furniture</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.gasStove' >Gas Stove</Checkbox>
              <Checkbox onChange={formik.handleChange} name='componentsDto.internet' >Internet</Checkbox>
            </Section>
          </Section>
        </MenuWrapper>

        <Button>{id ? 'Update' : 'Save'}</Button>
      </form>
    </Wrapper>
  )
}
