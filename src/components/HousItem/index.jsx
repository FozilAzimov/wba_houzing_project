import {
  Blur,
  CheckBox,
  Container,
  Content,
  FeaturesItem,
  FeaturesItems,
  Gradient,
  Icon,
  IconBlur,
  Icons,
  ImageContainer,
  ImgWrapper,
  InputWrapper,
  Items,
  Line,
  LocationContent,
  LocationItem,
  Parent,
  Subtitle,
  Text,
  User,
  UserData,
  UserImg,
  Wrapper,
  WrapperLeft,
  WrapperRight,
  Xarita
} from './style';

import noImg from '../../assets/imgs/noUser.webp';
import noImage from '../../assets/imgs/noimg.jpeg';
import img from '../../assets/imgs/gallaryImg.jpg';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Yandex from '../Generic/Yandex';
import Similar from '../Similar';
import Input from '../Generic/Input';
import Button from '../Generic/Button';

export default function HousItem () {
  const { REACT_APP_SECRET_URL: url } = process.env;
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${url}/houses/id/${params?.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res?.data);
        window.scrollTo(0, 0);
      })
    // eslint-disable-next-line
  }, [params?.id]);


  return (
    <Container>
      <ImageContainer>
        <ImageContainer.Main src={(data?.attachments && data?.attachments[0]?.imgPath) || noImage} />
        <ImgWrapper>
          {data?.attachments && data?.attachments?.slice(1, 5).map((value, index) => {
            return (data?.attachments.length > 5 && index === 3)
              ? (<Blur.Container>
                <ImageContainer.SubImg
                  key={index}
                  src={value?.imgPath || noImage} />
                <Blur>+{data?.attachments.length - 5}</Blur>
              </Blur.Container>)
              : (
                <ImageContainer.SubImg
                  key={index}
                  src={value?.imgPath || noImage} />
              )
          })}

        </ImgWrapper>
      </ImageContainer>
      <Wrapper>
        <WrapperLeft>
          <Content>
            <div className="title">
              <span style={{ fontSize: '24px' }}>{data?.address || 'Toshkent, Uzbekistan'}, {
                ((data?.country === 'string') || (!data?.country))
                  ? 'Uzbekistan'
                  : data?.country
              }</span>
            </div>
            <Icon>
              <IconBlur top><Icons.Share /></IconBlur><div className='info'>Share</div>
              <IconBlur top><Icons.Love /></IconBlur><div className='info'>Save</div>
            </Icon>
          </Content>

          <div className="info">{
            ((data?.country === 'string') || (!data?.country))
              ? 'Eng zo`r va sifatli uylar'
              : data?.category?.name
          }</div>
          <Icon left>
            <s className='info'>${data?.salePrice || 0}/mo</s>
            <div className="subTitle">
              <span style={{ fontSize: '24px', paddingLeft: '8px' }}>${data?.price || 0}/mo</span>
            </div>
          </Icon>

          <Content>
            <Icon>
              <Icons.Bed />
              <div className="info" style={{ padding: '0 24px 0 8px' }}>
                {data?.houseDetails?.beds || 0} Beds
              </div>
              <Icons.Bath />
              <div className="info" style={{ padding: '0 24px 0 8px' }}>
                {data?.houseDetails?.bath || 0} Bath
              </div>
              <Icons.Garage />
              <div className="info" style={{ padding: '0 24px 0 8px' }}>
                {data?.houseDetails?.garage || 0} Garage
              </div>
              <Icons.Ruler />
              <div className="info" style={{ padding: '0 24px 0 8px' }}>
                {data?.houseDetails?.area || 0} Sq Ft
              </div>
              <Icons.Calendar />
              <div className="info" style={{ padding: '0 24px 0 8px' }}>
                Year Built: {data?.houseDetails?.yearBuilt || 1991}
              </div>
            </Icon>
            <Icon>
              <div className="info">Est. Mortgage</div>
            </Icon>
          </Content>

          <Subtitle>Description</Subtitle>
          <Text>
            <div className="info">
              Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.
              <br /><br />
              The residence is comprised of 5 bedrooms, 2 master bathrooms, 4 on-suite guest bathrooms, 2 powder rooms, 2 offices, 2 dressing rooms, a media room, an oversized eat-in gourmet chef's kitchen, and a sprawling 1,100 square-foot Great Room perfectly situated in the prime southwest corner of the floor.
            </div>
            <Gradient />
          </Text>

          <Line />

          <Subtitle>Location</Subtitle>
          <LocationContent>
            <LocationItem>
              <Items>
                <div className="subTitle">Address</div>
                <div className="info">: {data?.address || 'Tashkent'}</div>
              </Items>
              <Items>
                <div className="subTitle">State/County</div>
                <div className="info">: {
                  ((data?.region === 'string') || (!data?.region))
                    ? 'no region'
                    : data?.region
                }</div>
              </Items>
            </LocationItem>
            <LocationItem>
              <Items>
                <div className="subTitle">City</div>
                <div className="info">: {data?.city || 'Tashkent'}</div>
              </Items>
              <Items>
                <div className="subTitle">Zip</div>
                <div className="info">: {data?.zipCode || 0}</div>
              </Items>
            </LocationItem>
            <LocationItem>
              <Items>
                <div className="subTitle">Category</div>
                <div className="info">: {data?.category?.name || 'Yashil uy'}</div>
              </Items>
              <Items>
                <div className="subTitle">Country</div>
                <div className="info">: {
                  ((data?.country === 'string') || (!data?.country))
                    ? 'Uzbekistan'
                    : data?.country
                }</div>
              </Items>
            </LocationItem>
          </LocationContent>

          <Xarita>
            <Yandex />
          </Xarita>

          <Line />

          <Subtitle>Features</Subtitle>
          <LocationContent>
            <FeaturesItems>
              <FeaturesItem>
                <IconBlur><Icons.Air /></IconBlur><div className='info'>Air Conditioning</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Barbeque /></IconBlur><div className='info'>Barbeque</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Dryer /></IconBlur><div className='info'>Dryer</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Gym /></IconBlur><div className='info'>Gym</div>
              </FeaturesItem>
            </FeaturesItems>
            <FeaturesItems>
              <FeaturesItem>
                <IconBlur><Icons.Lawn /></IconBlur><div className='info'>Lawn</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Laundry /></IconBlur><div className='info'>Laundry</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Microwave /></IconBlur><div className='info'>Microwave</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Shower /></IconBlur><div className='info'>Outdoor Shower</div>
              </FeaturesItem>
            </FeaturesItems>
            <FeaturesItems>
              <FeaturesItem>
                <IconBlur><Icons.Refrigerator /></IconBlur><div className='info'>Refrigerator</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Sauna /></IconBlur><div className='info'>Sauna</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Pool /></IconBlur><div className='info'>Swimming Pool</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Cable /></IconBlur><div className='info'>TV Cable</div>
              </FeaturesItem>
            </FeaturesItems>
            <FeaturesItems>
              <FeaturesItem>
                <IconBlur><Icons.Washer /></IconBlur><div className='info'>Washer</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Wifi /></IconBlur><div className='info'>WiFi</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Window /></IconBlur><div className='info'>Window Coverings</div>
              </FeaturesItem>
              <FeaturesItem>
                <IconBlur><Icons.Room /></IconBlur><div className='info'>Dining room</div>
              </FeaturesItem>
            </FeaturesItems>
          </LocationContent>

          <Line />
        </WrapperLeft>

        <WrapperRight>
          <User>
            <UserImg src={noImg} />
            <UserData>
              <div className='subTitle'>{data?.user?.firstname} {data?.user?.lastname}</div>
              <div className="info">+998 (93) 948 4001</div>
            </UserData>
          </User>
          <InputWrapper>
            <Input placeholder='Name' type='text' height='40' />
            <Input placeholder='Phone' type='text' height='40' />
            <Input placeholder='Email' type='email' height='40' />
          </InputWrapper>
          <Parent>
            <CheckBox type='checkbox' />
            <div className="info">By submitting this form I agree to Terms of Use</div>
          </Parent>
          <Button width='100%'>Send request</Button>
        </WrapperRight>
      </Wrapper>

      <Similar />

    </Container >
  )
}