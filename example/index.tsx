import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CtaButton } from '../.';

const App = () => {
  return (
    <div>
      <CtaButton label="Assine" disable={false} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
