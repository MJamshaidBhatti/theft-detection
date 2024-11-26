import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import Icon from "./Icon"


const WizeContactForm = () => {
  return (
    <div className="flex justify-content-center py-4 px-4 lg:px-8 my-2 md:my-5">
      <div className="flex flex-column md:flex-row align-items-center md:align-items-start w-full">
        <div className="flex-1  pr-7">
          <h2 className="text-5xl font-bold">Get in Touch Today!</h2>
          <p className="text-lg my-4">Reach out to us to learn more about Wize Observer and how it can benefit your business.</p>
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-6 pb-2">
              <InputText className="in-put surface-200 border-none border-round-md py-2 px-2" id="name" type="text" placeholder='Name *'/>
            </div>
            <div className="field col-12 md:col-6 pb-2">
              <InputText className="in-put surface-200 border-none border-round-md py-2 px-2" id="email" type="text" placeholder='Email Address *'/>
            </div>
            <div className="field col-12 md:col-6 pb-2">
              <InputText className="in-put surface-200 border-none border-round-md py-2 px-2" id="phone" type="text" placeholder='Phone Number *'/>
            </div>
            <div className="field col-12 md:col-6 pb-2">
              <InputText className="in-put surface-200 border-none border-round-md py-2 px-2" id="company" type="text" placeholder='Company *'/>
            </div>
            <div className="field col-12 pb-2">
              <InputTextarea className="surface-200 border-none border-round-md py-2 px-2" id="message" rows={7} placeholder='Message *'/>
            </div>
            <div className="col-12 flex justify-content-start">
              <Button
                type="button"
                label="Submit"
                rounded
                className="app-primary text-white text-xl w-auto border-none flex align-items-center justify-content-center font-normal line-height-3 py-2 px-5"
              />
            </div>
          </div>
        </div>
        <div className="flex contat-items w-5 pl-3">
        <Icon name={'contact'} type='png' className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  );
};

export default WizeContactForm;
