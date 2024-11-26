import React from "react";
import Icon from "./Icon"
import { Divider } from 'primereact/divider';


const WizeFooter = () => {
    
  return (
    <footer className="footer pt-6 px-6">
      <div className="grid justify-content-between align-items-center mb-8">
        <div className="col-fixed">
          <div className="footer-logo">
            <Icon name="app-footer-logo" type="svg" />
          </div>
        </div>
        <div className="col">
          <div className="footer-contact text-right flex align-items-center justify-content-end">
            <div className="mx-5 flex align-items-center justify-content-center">
              <Icon name="envelope" type="svg" className="mr-3"/>
              <span className="pb-1">info@shispare.com</span>
            </div>
            <div className="flex align-items-center justify-content-center">
              <Icon name="phone" type="svg" className="mr-3"/>
              <span className="pb-1">+92 302 8223496</span>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="text-left py-5">
        <p className="text-400">© Wizeobserver 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default WizeFooter;
