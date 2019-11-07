import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Form from './componentes/form';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
