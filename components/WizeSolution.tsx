import React, { useState,useEffect } from 'react';
import Icon from './Icon';


const solutions = [
  { id: 1, title: 'Real-Time Monitoring', description: 'To combat internal theft, Wize Observer uses powerful AI analytics and real-time warnings to track activity and limit access.', imgSrc: '/path/to/real-time-monitoring.jpg' },
  { id: 2, title: 'Optimizing Processing Frameworks', description: 'The system detects theft through behavior and gesture analysis, providing real-time alerts during peak hours and sales events to mitigate losses.', imgSrc: '/path/to/optimizing-processing-frameworks.jpg' },
  { id: 3, title: 'Inventory Accuracy', description: 'WizeObserver enhances inventory accuracy and minimizes losses through real-time monitoring, AI anomaly detection, and instant alerts.', imgSrc: '/path/to/inventory-accuracy.jpg' },
  { id: 4, title: 'Ease Of Use', description: 'WizeObserver is designed with user-friendly interfaces to ensure that anyone can use the system efficiently.', imgSrc: '/path/to/ease-of-use.jpg' },
  { id: 5, title: 'Scalable and Modular Approach', description: 'Our solution scales with your business needs, providing modular features that grow with your operations.', imgSrc: '/path/to/scalable-modular-approach.jpg' }
];


const WizeSolution = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<any | null>();

  useEffect(() => {
    if (solutions.length > 0) {
      setSelectedSolutionId(solutions[0].id);
    }
  }, [solutions]);

  const handleSelect = (id: number) => {
    setSelectedSolutionId(id);
  };

  return (
    <div className="solutions-container">
      <h2 className="solutions-title">Our Solutions</h2>
      <p className="solutions-subtitle">Smart Solutions for Theft Detection</p>
      <div className="grid justify-content-center pt-4">
        <div className="col-12 md:col-5 lg:col-5  hidden md:block pr-5">
          <Icon name="solution" type="png" className="solution-img w-full" />
        </div>
        <div className="col-12 md:col-7 lg:col-7 solution-main">
          <div className="solutions-list">
            {solutions.map(solution => (
              <div key={solution.id} 
              className={`solution-item ${selectedSolutionId === solution.id ? 'app-bg-secondary solution-active' : 'solution-title'}`}
              onClick={() => handleSelect(solution.id)}
              >
              <Icon name="solution" type="png" className="solution-img block md:hidden w-full" />

                <div className="solution-content">
                  <h3 className='content-title'>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizeSolution;
