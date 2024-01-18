import { useState } from 'react';
import Number from './components/Number';
import Button from './components/Button';

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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button name="Previous" onClick={handlePrevious} />
            <Button name="Next" onClick={handleNext} />
          </div>
        </div>
      )}
    </>
  );
}
