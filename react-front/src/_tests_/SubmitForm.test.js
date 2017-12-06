import React from 'react';
import ReactDOM from 'react-dom';
import SubmitForm from '../components/SubmitForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitForm />, div);
});

test('postForm clears state', () => {
  const t = Enzyme.shallow(<SubmitForm refreshTips={function(temp) {return temp}} />);
  t.instance().postForm();
  expect(t.state().author).toEqual("");
  expect(t.state().title).toEqual("");   
});

test('submit clickable', () => {
  const t = Enzyme.shallow(<SubmitForm book={{ title: 'test', author: 'test', _id: 1 }} refreshTips={(temp) => {return 0}} />);
  t.find('Button').simulate('click');
});


