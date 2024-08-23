//import React from 'react'
import AdminHeader from "./AdminHeader"
import AdminSideNav from "./AdminSideNav"
import Overview from "./Overview"

function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <div className="flex bg-[#F6F6F6]">
        <div className="basis-1/4 -mt-16">
          <AdminSideNav />
        </div>
        <div className="basis-3/4 px-4 py-5">
          <Overview />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard