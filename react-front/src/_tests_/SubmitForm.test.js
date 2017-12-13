import React from 'react';
import ReactDOM from 'react-dom';
import SubmitForm from '../components/SubmitForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const books = { 
  viewName: "books",
  target: "Book",
  field1: "Author",
  field2: "Book title"
}
const videos = { 
  viewName: "videos",
  target: "Youtube",
  field1: "Video",
  field2: "Link"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitForm view={books} />, div);
});

test('postForm clears state', () => {
  const t = Enzyme.shallow(<SubmitForm view={books} refreshTips={function(temp) {return temp}} />);
  t.instance().postForm();
  expect(t.state().author).toEqual("");
  expect(t.state().title).toEqual("");   
});

test('submit clickable', () => {
  const t = Enzyme.shallow(<SubmitForm book={{ title: 'test', author: 'test', _id: 1 }} view={books} refreshTips={(temp) => {return 0}} />);
  t.find('Button').simulate('click');
});


