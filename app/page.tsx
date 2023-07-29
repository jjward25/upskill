"use client"
import { list } from 'postcss';
import content from '../employees.json';
import React, { useState } from 'react'
import Link from 'next/link'

export default function Detail() {

    const [expandedIds, setExpandedIds] = useState(['']);

    const toggleVisibility = (idToToggle:any) => {
      // set new state
      setExpandedIds((prevIds:any) => {
      // if the id to toggle is in the array, if not add it
      if (!expandedIds.includes(idToToggle)) return [...prevIds, idToToggle];
      // else remove the id
      return prevIds.filter((id:any) => id !== idToToggle);
    });
  };
  
  const [value, setValue] = useState(content);
  console.log(value)

  function filterByValue(array:any, string:any) {
    return array.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(string.toLowerCase())));
  }
  
  function filterByRole(array:any, string:any) {
    return array.filter(emp => emp.role.toLowerCase().includes(string.toLowerCase()))
}
  function filterByName(array:any, string:any) {
    return array.filter(emp => emp.firstLast.toLowerCase().includes(string.toLowerCase()))
    }



  return (
    <main className='flex flex-col md:flex-row min-h-screen w-full max-w-full'>

      <div className='flex flex-1 flex-col p-3 overflow-hidden md:w-1/5 md:p-5 md:min-h-screen bg-white rounded-r-xl '>
        <div className='flex flex-col h-fit w-full'>                
            <h3 className="flex-1 font-medium text-xl w-full my-1">
              <a href="/myteam">
                <p key={"Key" + Math.random()} className="flex-1 p-1 rounded font-medium text-white bg-slate-600 hover:bg-indigo-400 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                    My Team
                </p>
              </a>
            </h3>
        </div>  
        <h3 className='h-0 md:h-min font-bold md:my-5'>Search:</h3>
        <input className='mb-5 border-2 ' 
            placeholder='Search by Role'
            onChange={(e) => {setValue(filterByRole(content,e.target.value));}}>        
        </input>
        <input className='mb-5 border-2' 
            placeholder='Search by Name'
            onChange={(e) => {setValue(filterByName(content,e.target.value));}}>        
        </input>
   
        <p className='my-3'>{`Visualizing employee data this way helps with staffing projects and management 1:1s, gives HRs a view of internal candidates for openings, and can be used to steer professional development towards company future state goals.`}</p>
      </div> 


      <div className='flex flex-col md:flex-row h-min p-5 w-full md:w-4/5'>

        <div className=' m-auto md:flex md:flew-row h-min font-bold mb-5'>
      
          <div className="flex flex-col md:flex-row md:flex-wrap min-h-screen md:content-start md:justify-normal md:items-start">


              {content &&
                  value.map((item, i) => (

                  <div key={"Card" + Math.random()} className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-80 cursor-pointer mx-5 my-5">

                      <div className="flex items-center bg-white h-15 pl-3 pt-2">
                          <img className='w-14 h-14 p-1 mt-1 object-cover m-auto rounded-full' alt='User avatar' src={item.imgLink}/>
                
                          <div className="pl-3 w-full">
                              <div className="font-medium">
                                  {item.firstLast}
                              </div>
                              <div className="text-gray-600 text-sm pt-1">
                                  {item.role}
                              </div>
                          </div>
                      </div>

                      <a href="#" className="w-full block h-full">
                          <div className="bg-white w-full p-4 pt-2">
                            
                              <p className="text-gray-600 font-light text-sm py-2 mb-2 border-y-2">
                                Company Start: <em>{item.companyStartDate}</em>
                                <br/>Role Start: <em>{item.roleStartDate}</em>
                                <br/>Role Tenure Rank: <em>{item.roleTenureRank}</em>
                              </p>
                              <p className="text-gray-600 font-light text-xs pr-1 pb-2 mb-2 border-b-2">
                                  <em>{item.personalStatement}</em>
                              </p>

                              <div className="flex flex-col justify-starts items-left py-2 mb-2 text-sm border-b-2">
                                    Skills + Tools:
                                    <div className='flex flex-wrap mb-2'>
                                        {Object.keys(item.skillsTools).map(key => (
                                            <span key={"Key" + Math.random()} className="my-2 mr-1 px-2 py-1 rounded font-medium text-white bg-indigo-500">
                                            {key}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                              <div className='text-center text-gray-400 font-light italic hover:text-indigo-400'> 
                                  <Link className='' 
                                      href=''
                                      scroll={false}
                                      onClick={(e) => toggleVisibility(item.EmpID)}>
                                      - - Expand - -</Link>
                              </div>

                              {expandedIds.includes(item.EmpID)  && (
                                  <div className="flex flex-col my-5 px-2">
                                    <img alt="blog photo" src={item.imgLink} className="max-h-40 w-full object-cover mb-2 rounded-xl"/>

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
                                      <p className="text-gray-600 font-light text-sm pb-2 mb-2">
                                          {item.careerDevelopment.priorExperience.relatedCertificationsEnablement}
                                      </p>
                                  </div>
                              )}
                              
                          </div>
                      </a>
                  </div>
              ))}
          </div>
      
          <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
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