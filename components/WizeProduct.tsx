
import React from "react";
import Icon from "./Icon"

const ApplicationsComponent = () => {
    const products = [
        { id: 1, name: 'Banking', imgSrc: 'bank' },
        { id: 2, name: 'Warehouse', imgSrc: 'warehouse' },
        { id: 3, name: 'Retail', imgSrc: 'bank' },
        { id: 4, name: 'Manufacturing', imgSrc: 'manufacturing' },
        { id: 5, name: 'Offices', imgSrc: 'offices' },
      ];
      
  return (
    <div className="applications-container lg:px-8">
      <div className="text-center py-5">
        <h2>One Product, Many Applications</h2>
      </div>
      <div className="flex align-items-center justify-content-between">
        {products.map(app => (
          <div key={app.id} className="application-conent mx-2">
            <div className="application-item">
            <Icon name={app?.imgSrc || ''} type='png' className="w-full" />
              <p className="text-left">{app?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsComponent;
