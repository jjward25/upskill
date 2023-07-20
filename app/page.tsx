"use client"
import content from '../employees.json';
import React, { useState } from 'react'

export default function Detail() {

    const [expandedIds, setExpandedIds] = useState<Any>([]);

    const toggleVisibility = (idToToggle) => {
      // set new state
      setExpandedIds((prevIds) => {
      // if the id to toggle is in the array, if not add it
      if (!expandedIds.includes(idToToggle)) return [...prevIds, idToToggle];
      // else remove the id
      return prevIds.filter((id) => id !== idToToggle);
    });
  };


    return (
      <main className='flex flex-row min-h-screen w-full max-w-full'>

        <div className='flex flex-col w-0 p-0 overflow-hidden md:w-1/5 md:p-5 md:min-h-screen bg-white rounded-r-xl '>
          <div className='flex flex-row h-15'>
            <img className='w-10 h-10 object-cover m-auto rounded-full' alt='User avatar' src="/greg.png"/>    
                <h3 className="pl-3 font-medium text-xl w-full content-center my-auto">
                        My Team
                </h3>
         </div>    
          <h3 className='h-min font-bold my-5'>Search Keywords:</h3>
          <p>{`Visualizing employee data this way helps with staffing projects and management 1:1s, gives HRs a view of internal candidates for openings, and can be used to steer professional development towards company future state goals.`}</p>
        
        </div> 


        <div className='flex flex-col md:flex-row h-min p-5 w-full md:w-4/5'>

          <div className=' m-auto md:flex md:flew-row h-min font-bold mb-5'>
            <div className="flex flex-col md:flex-row min-h-screen md:items-start">
              
                {content.accountExecutives &&
                    content.accountExecutives.map((item, i) => (

                    <div key={"Card" + Math.random()} className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-80 cursor-pointer mx-5 my-5">

                        <div className="flex items-center bg-white h-15">
                            <img className='w-14 h-14 object-cover m-auto rounded-full' alt='User avatar' src={item.imgLink}/>
                
                            <div className="pl-3 w-full">
                                <div className="font-medium">
                                    {item.firstLast}
                                </div>
                                <div className="text-gray-600 text-sm">
                                    {item.role}
                                </div>
                            </div>
                        </div>

                        <a href="#" className="w-full block h-full">
                            <img alt="blog photo" src={item.imgLink} className="max-h-40 w-full object-cover"/>
                            <div className="bg-white w-full p-4">
                                {item.firstLast}
                                <p className="text-gray-800 text-sm font-medium pb-2 mb-2 border-b-2">
                                    {item.role}                    
                                </p>
                                <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                  Company Start: <em>{item.companyStartDate}</em>
                                  <br/>Role Start: <em>{item.roleStartDate}</em>
                                  <br/>Role Tenure Rank: <em>{item.roleTenureRank}</em>
                                </p>
                                <p className="text-gray-600 font-light text-xs pr-1 pb-2 mb-2 border-b-2">
                                    <em>{item.personalStatement}</em>
                                </p>

                                <div className='text-center text-gray-400 font-light italic'> 
                                    <a className='' onClick={(e) => toggleVisibility(item.EmpID)}>
                                        - - Expand - -</a>
                                </div>

                                {expandedIds.includes(item.EmpID)  && (
                                    <div className="flex flex-col my-5 px-2">
                                      
                                        <p className='text-sm'>Role Performance: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            Customer Satisfaction: {item.roleDevelopment.rolePerformance.customerSatisfaction}
                                            <br/>Deals Signed: {item.roleDevelopment.rolePerformance.signedDeals}
                                            <br/>Gross Renewal ARR: {item.roleDevelopment.rolePerformance.grossRenewalARR}
                                            <br/>Net Renewal ARR: {item.roleDevelopment.rolePerformance.netRenewalARR}
                                            <br/>Average Lifetime Value: {item.roleDevelopment.rolePerformance.avgCustomerLifetimeValue}
                                        </p>

                                        <p className='text-sm'>Certifications + Enablement: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            {item.roleDevelopment.certificationsEnablement}
                                        </p>

                                        <p className='text-sm'>Workflow Analytics: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            Avg Accounts Managed: {item.roleDevelopment.workflowAnalytics.avgBookSize}
                                            <br/>Avg Monthly Time per Client: {item.roleDevelopment.workflowAnalytics.avgClientTime}
                                        </p>

                                        <p className='text-sm'>Performance Details: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            {item.roleDevelopment.Other.Note}
                                        </p>

                                        <p className='text-sm'>Common Next Roles: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            {item.careerDevelopment.commonNextRoles && item.careerDevelopment.commonNextRoles.map((role) => (<p key={"Role" + Math.random()} >{role}</p>))}
                                        </p>

                                        <p className='text-sm'>Prior + Related: </p>
                                        <p className="text-gray-600 font-light text-sm pb-2 mb-2 border-b-2">
                                            {item.careerDevelopment.priorExperience.relatedCertificationsEnablement}
                                        </p>

                                        <div className="flex flex-col justify-starts items-left py-2 border-b-2 text-sm ">
                                            Skills + Tools:
                                            <div className='flex flex-wrap'>
                                                {Object.keys(item.careerDevelopment.skillsTools).map(key => (
                                                    <span key={"Key" + Math.random()} className="my-1 mr-1 px-2 py-1 rounded font-medium text-white bg-indigo-500">
                                                    {key}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        
            <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Follow me on LinkedIn" href="https://www.linkedin.com/in/joe-ward1/" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://th.bing.com/th/id/OIP.Fj65Lv4giEhNC2YZnKlmkAHaHa?pid=ImgDet&rs=1"/>
                    </a>
                </div>
            </div>
       </div>
  
       </div>
      </main>
    )
}