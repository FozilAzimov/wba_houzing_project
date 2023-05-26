import { AntTabs, Container } from './style';

import SignIn from '../SignIn';
import SignUp from '../SignUp';

export default function Register () {

  const onTabs = () => { }

  const items = [
    {
      key: '1',
      label: 'Sign in',
      children: <SignIn />
    },
    {
      key: '2',
      label: 'Sign up',
      children: <SignUp />
    }
  ];

  return (
    <Container>
      <AntTabs defaultActiveKey="1" items={items} onChange={onTabs} />
    </Container>
  )
}