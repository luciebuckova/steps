import { useState } from 'react';
import Number from './components/Number';
import Button from './components/Button';
import { StepMessage } from './components/StepMessage';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
  'Be happy 😁',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < [messages.length]) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  function toggleOpen() {
    setIsOpen((openStatus) => !openStatus);
  }

  return (
    <>
      <button className="close" onClick={toggleOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <Number currentStep={step} num={1} />
            <Number currentStep={step} num={2} />
            <Number currentStep={step} num={3} />
            <Number currentStep={step} num={4} />
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950f2" textColor="#fff">
              <span>👈</span>Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950f2" textColor="#fff">
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
