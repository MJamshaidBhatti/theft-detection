import React from 'react';
import { Carousel } from 'primereact/carousel';
import Icon from "./Icon"


const challenges = [
    {
        title: "Increased Risk Of Employee Misconduct",
        description: "of global retail shrinkage is attributed to internal theft, highlighting the challenge of detecting such incidents as  ",
        image: "cash",
        percentage: "33.2%"
    },
    {
        title: "Complexities Of Large Crowd Management",
        description: " of total retail sales are lost to theft annually, highlighting the significant challenge of preventing theft in large crowds during peak ",
        image: "store",
        percentage: "2.25%"
    },
    {
        title: "Maintaining Accurate Inventory Records",
        description: "of total retail sales are lost to inventory shrinkage, emphasizing the role of theft detection software in enhancing inventory accuracy and ",
        image: "shops",
        percentage: "1.62%"
    },
    {
        title: "Complexities of Large Crowd Management",
        description: "of total retail sales are lost to inventory shrinkage, emphasizing the role of theft detection software in enhancing inventory accuracy and ",
        image: "store",
        percentage: "38%"
    },
    {
        title: "Maintaining Accurate Inventory Records",
        description: "of total retail sales are lost to inventory shrinkage, emphasizing the role of theft detection software in enhancing inventory accuracy and ",
        image: "cash",
        percentage: "1.62%"
    },
    {
        title: "Maintaining Accurate Inventory Records",
        description: "of total retail sales are lost to inventory shrinkage, emphasizing the role of theft detection software in enhancing inventory accuracy and ",
        image: "shops",
        percentage: "1.62%"
    },
];

const WizeChallenge = () => {
    const itemTemplate = (challenge:any) => {
        return (
            <div className="carousel-item p-3">
               <div className='card-hover'>
                    <div className="p-card p-shadow-3 p-m-2" >
                        <div className="p-card-body card-content">
                        <Icon name={`/landing/${challenge.image}` || ''}  type="png" className="w-full"/>
                            <h3 className="card-title mt-3 px-4">{challenge.title}</h3>
                            <p className="card-description px-4 pb-4"> <span className="card-percentage">{challenge.percentage}</span>  {challenge.description}</p>
                        </div>
                    </div>
               </div>
            </div>
        );
    };

    return (
        <div className="mt-5">
            <h2 className="text-center mb-0">Challenges</h2>
            <h4 className="text-center text-xl mt-5 mb-6">Addressing Critical Business Concerns</h4>
            <Carousel value={challenges} itemTemplate={itemTemplate}  numVisible={4} numScroll={1} circular={false}  />
        </div>
    );
};

export default WizeChallenge;
