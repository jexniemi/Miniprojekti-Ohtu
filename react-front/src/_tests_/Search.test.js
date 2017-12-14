import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search';
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
  ReactDOM.render(<Search books={[{ title: 'test', author: 'test', _id: 1 }]} view={books} />, div);
});



