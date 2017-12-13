import React from 'react';
import ReactDOM from 'react-dom';
import BookList from '../components/BookList';
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

it('is one test', () => {
    ;
  });

it('renders', () => {
    const t = Enzyme.render(<BookList view={books} books={[{  title: 'test' }]} />);
    expect(t.text()).toEqual(" Submit suggestions Author:Book title:Submit Book suggestions ");
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookList view={books} books={[{  title: 'test' }]} />, div);
});


