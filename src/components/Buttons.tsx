import React from 'react';

const Buttons: React.FC = () => {
  return (
    <div className="space-x-4">
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-outline">Outline</button>
    </div>
  );
};

export default Buttons;
