import React from 'react';

import { Input, Button } from '../Generic';
// import { Dropdown } from 'antd';
import {
  Container,
  Icons,
} from './style';


export default function Filter () {
  return (
    <Container>
      <Input icon={<Icons.Houz />} placeholder={'Enter an address, neighborhood, city, or Zip code'} />

      {/* <Dropdown menu={menu} placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <div>
          <Button type='light'><Icons.Filter /> Advenced</Button>
        </div>
      </Dropdown> */}

      <Button type='light'><Icons.Filter /> Advenced</Button>
      <Button><Icons.Search /> Search</Button>
    </Container>
  )
}
