import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from '../components/NavigationBar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationBar />, div);
});

test('initial text is "BookBuddy"', () => {
  const t = Enzyme.render(<NavigationBar />);
  expect(t.text()).toEqual("BookBuddy");
});