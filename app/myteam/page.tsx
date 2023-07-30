"use client"
import content from '../../employees.json';
import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Chart, BarController, BarElement, CategoryScale,LinearScale,Tooltip, Legend, LineController,ArcElement, LineElement,PieController ,PointElement} from 'chart.js'
Chart.register(BarController, ArcElement, BarElement, CategoryScale,LinearScale,Tooltip, Legend, LineController, LineElement,PieController ,PointElement)



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

  const barData = {
    labels: ['Name1', 'Name1', 'Name3', 'Name4'],
    datasets: [{
      label: 'Metric 1',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  }

  const barData2 = {
    labels: ['Name1', 'Name1', 'Name3', 'Name4'],
    datasets: [{
      label: 'Metric 2',
      data: [4, 10, 13, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  }
  const barData3 = {
    labels: ['Name1', 'Name1', 'Name3', 'Name4'],
    datasets: [{
      label: 'Metric 3',
      data: [140, 103, 113, 154],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  }
  const pieData = {
    backgroundColor: [
        "rgb(,2,88,255)",
        "rgb(249,151,0)",
        "rgb(255,199,0)",
        "rgb(32,214,152)",
    ],
    labels: ["Skill1","Skill2","Skill3","Skill4"],
    datasets: [
        {
            label: "Years",
            data: [3,5,10,3],
            backgroundColor: [
                "rgb(,2,88,255)",
                "rgb(249,151,0)",
                "rgb(255,199,0)",
                "rgb(32,214,152)",
            ],
            hoverOffset: 4,
        }
    ]
}
    return (
      <main className='flex flex-col md:flex-row min-h-screen w-full max-w-full'>

        <div className='flex flex-1 flex-col p-3 overflow-hidden md:w-1/5 md:p-5 md:min-h-screen bg-white rounded-r-xl  '>

        
        <div className='flex flex-col h-fit w-full'>                

            <h3 className="flex-1 font-medium text-xl w-full my-auto">
            <a href="/">
                <p key={"Key" + Math.random()} className="flex-1 p-1 mb-4  rounded font-medium text-white bg-slate-600 hover:bg-indigo-400 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                    Home                
                </p>
                </a>
            </h3>
            <div className='flex flex-row h-15'>
                <img className='w-10 h-10 object-cover m-auto rounded-full' alt='User avatar' src="/boss.png"/>    
                <h3 className="pl-3 font-medium text-xl w-full content-center my-auto">
                    Manager Name
                </h3>
            </div>

         </div>    
          <p className='mt-5'>{`Visualizing employee data this way helps with staffing projects and management 1:1s, gives HRs a view of internal candidates for openings, and can be used to steer professional development towards company future state goals.`}</p>
        
        </div> 


        <div className='flex flex-col md:flex-row h-min p-5 w-full md:w-4/5'>

        <div className=' m-auto md:flex w-full md:flew-row h-min font-bold mb-5 md:max-w-1/2'>

        <div className="flex flex-col md:flex-row md:flex-wrap min-h-screen md:content-start md:justify-normal md:items-start">

                {content &&
                    content.filter(item => item.role == 'Account Executive').map((item, i) => (

                    <div key={"Card" + Math.random()} className=" overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl rounded-lg h-90 w-80 cursor-pointer mx-auto md:mx-5 my-5">

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
                                    <div className='flex flex-wrap'>
                                        {Object.keys(item.skillsTools).map(key => (
                                            <span key={"Key" + Math.random()}  className="my-2 mr-1 px-2 py-1 rounded font-medium text-white bg-indigo-500">
                                            {key}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-center text-gray-400 font-light italic hover:text-indigo-400'> 
                                    <a className='' onClick={(e) => toggleVisibility(item.EmpID)}>
                                        - - Expand - -</a>
                                </div>

                                {expandedIds.includes(item.EmpID)  && (
                                    <div className="flex flex-col my-5 px-2">
                                        <div className="flex flex-row max-h-60 w-full object-cover mb-5 rounded-xl justify-center">
                                        <Doughnut data={pieData}/>
                                        </div>

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
        
            <div className='flex flex-col h-screen md:w-full '>
                
                <div className='h-1/5 w-4/5 my-3 mx-auto'>
                <Bar 
                data={barData}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
                />
                </div>

                <div className='h-1/5 w-4/5 my-5 mx-auto'>
                <Bar 
                data={barData2}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
                />
                </div>

                <div className='h-1/5 w-4/5 my-5 mx-auto'>
                <Bar 
                data={barData3}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false
                }}
                />
                </div>
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