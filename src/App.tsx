import Controls from './components/Controls';
import { FC } from 'react';
import View from './components/View';

const App: FC = () => {
  return (
    <>
      <p>
        <strong>View</strong> component
      </p>
      <View />
      <p>
        <strong>Controls</strong> component
      </p>
      <Controls />
    </>
  );
};

export default App;
