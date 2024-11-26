
import React from 'react'; 
import Icon from "../components/Icon"

export default function FeatureCard(data:any) {
    return (
        <div
        style={{
          height: "210px",
          padding: "2px",
          borderRadius: "20px",
          background:"#F9F9F9",
          border: "1px solid #2CB78C"
        }}
      >
        <div
          className="p-3 h-full"
          style={{ borderRadius: "20px" }}
        >
          <div
            className="flex align-items-center justify-content-center  mb-3"
            style={{
              width: "59px",
              height: "57px",
              borderRadius: "100px",
              background:"#2CB78C"
            }}
          >
            <Icon name={data.data?.icon || ''} type='svg' />
          </div>
          <h5 className="mb-2 text-900">{data.data?.title}</h5>
          <span className="text-sm">
          {data.data?.label}
          </span>
        </div>
      </div>
    )
}
        