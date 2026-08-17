import React, { useState, useEffect } from 'react';
import type { SequenceStep } from '../sequence';

interface AtlasStageProps {
  sequence: SequenceStep[];
}

const AtlasStage: React.FC<AtlasStageProps> = ({ sequence }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(false);
      setTimeout(() => {
        setCurrentStepIndex((prevIndex) => (prevIndex + 1) % sequence.length);
        setIsActive(true);
      }, 100);
    }, sequence[currentStepIndex].duration);

    return () => clearInterval(interval);
  }, [currentStepIndex, sequence]);

  return (
    <div className="atlas-stage">
      {sequence.map((step, index) => (
        <div
          key={step.id}
          className={`sequence-element ${index === currentStepIndex && isActive ? 'active' : ''}`}
          style={{
            transitionDelay: index === currentStepIndex ? '0s' : undefined,
          }}
        >
          {step.element}
        </div>
      ))}
    </div>
  );
};

export default AtlasStage;