import React from 'react';
import ReactDOM from 'react-dom';
import BookList from '../components/BookList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('is one test', () => {
    ;
  });

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookList books={[]} />, div);
});

/*
test('Renders a tip', () => {
    const t = Enzyme.shallow(<BookList books={[{  title: 'test' }]} />);
    expect(t.text()).toEqual('<Tip />');
});

test('Renders empty if no tips', () => {
    const t = Enzyme.shallow(<BookList books={[]} />);
    expect(t.text()).toEqual('');
});
*/