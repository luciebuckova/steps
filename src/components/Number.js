export default function Number({ currentStep, num }) {
  return <div className={currentStep >= num ? 'active' : ''}>{num}</div>;
}
