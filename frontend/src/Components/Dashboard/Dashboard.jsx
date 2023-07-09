import React from 'react'
import SideBar from './Sections/SideBarSection/SideBar'
import Body from './Sections/BodySection/Body'

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
       <div className="dashboardContainer flex">
        <SideBar/>
        <Body/>
       </div>
    </div>
  )
}

export default Dashboard