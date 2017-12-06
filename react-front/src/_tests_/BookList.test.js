import React from 'react';
import ReactDOM from 'react-dom';
import BookList from '../components/BookList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('is one test', () => {
    ;
  });

it('renders', () => {
    const t = Enzyme.render(<BookList books={[{  title: 'test' }]} />);
    expect(t.text()).toEqual(" Submit suggestions Author:Book title:Submit Book suggestions ");
});

test('removing books works', () => {
    const t = Enzyme.shallow(<BookList />);
    t.instance().addBook({ _id: 1});
    t.instance().addBook({ _id: 2});
    t.instance().removeBook(1);
    expect(t.state().books).toEqual([{"_id": 2}]);   
});

test('getBooks can be called', () => {
    const t = Enzyme.shallow(<BookList />);
    t.instance().getBooks();
});

test('adding books works', () => {
    const t = Enzyme.shallow(<BookList />);
    t.instance().addBook({ _id: 1});
    expect(t.state().books).toEqual([{"_id": 1}]);  
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookList />, div);
});


