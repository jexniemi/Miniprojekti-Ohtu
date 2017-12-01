import React from 'react';
import ReactDOM from 'react-dom';
import Tip from '../components/Tip';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tip book={{ title: 'test', author: 'test' }} />, div);
});

test('Tip renders correct text', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test' }} />);
  expect(t.text()).toEqual('test: test edit');
});