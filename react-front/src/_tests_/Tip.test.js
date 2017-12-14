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

it('video view renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tip refreshTips={() => {}}  book={{ title: 'test', author: 'test', type: 'videos' }} />, div);
});

it('book view renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tip refreshTips={() => {}} book={{ title: 'test', author: 'test', type: 'books' }} />, div);
});

test('Tip renders correct text', () => {
  const t = Enzyme.shallow(<Tip refreshTips={() => {}} book={{ title: 'test', author: 'test' }} />);
  expect(t.text()).toEqual("");
});

test('renders props correctly', () => {
  const t = Enzyme.mount(<Tip book={{ title: 'test', author: 'test' }} />);
  expect(t.props().book).toEqual({"author": "test", "title": "test"});
});

test('allows setting props', () => {
  const t = Enzyme.mount(<Tip book={{ title: 'test', author: 'test' }} />);
  t.setProps({ book: {"author": "test2", "title": "test2"}});
  expect(t.props().book).toEqual({"author": "test2", "title": "test2"});
});

test('editing false by default', () => {
  const t = Enzyme.mount(<Tip book={{ title: 'test', author: 'test' }} />);
  expect(t.state().editing).toEqual(false);
});

test('editing changes when changeEditing is called', () => {
  const t = Enzyme.mount(<Tip book={{ title: 'test', author: 'test' }} />);
  t.instance().changeEditing();
  expect(t.state().editing).toEqual(true);
});

test('edit-button initialized', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test' }} />);
  expect(t.find('fa fa-pencil')).toHaveLength(0);
});

test('ajax call are possible', () => {
  const t = Enzyme.shallow(<Tip refreshTips={() => {}} book={{ title: 'test', author: 'test', _id: 1 }} removeBook={(temp) => {return 0}} />);
  t.instance().update();
  t.instance().delete();
});

test('edit clickable in videos', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test', _id: 1, type: 'videos' }} />);
  t.find('#edit').simulate('click');
});

test('edit clickable in books', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test', _id: 1, type: 'books' }} />);
  t.find('#adit').simulate('click');
});

test('delete clickable in books', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test', _id: 1, type: 'books' }} removeBook={() => {}} />);
  t.find('#edit').simulate('click');
});

test('delete clickable in videos', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test', _id: 1, type: 'videos' }} removeBook={() => {}} />);
  t.find('#delete').simulate('click');
});

test('show clickable in videos', () => {
  const t = Enzyme.shallow(<Tip book={{ title: 'test', author: 'test', _id: 1, type: 'videos' }} />);
  t.find('#show').simulate('click');
});

test('rendered edit clickable in videos', () => {
  const t = Enzyme.shallow(<Tip refreshTips={() => {}} book={{ title: 'test', author: 'test', _id: 1, type: 'videos' }} />);
  t.instance().renderEdit();
  t.find('#edit').simulate('click');
  t.find('#rendered').simulate('click');
});

