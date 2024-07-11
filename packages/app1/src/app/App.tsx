import React from 'react';
import {testFunction} from '@ts-monorepo/common';
import {MainStackContainer} from '@navigation/MainStack';

function App(): React.JSX.Element {
  console.log('common test function===>', testFunction(2, 4));

  return <MainStackContainer />;
}

export default App;
