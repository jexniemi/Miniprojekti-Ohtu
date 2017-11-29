import React from 'react';
import ReactDOM from 'react-dom';
import SubmitForm from '../components/SubmitForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SubmitForm />, div);
});
