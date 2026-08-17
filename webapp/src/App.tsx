import React from 'react';
import './styles.css';
import { AtlasSequence } from './sequence';
import AtlasStage from './components/AtlasStage';
import NunoContribution from './components/NunoContribution';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <AtlasStage sequence={AtlasSequence} />
      <NunoContribution />
    </div>
  );
};

export default App;