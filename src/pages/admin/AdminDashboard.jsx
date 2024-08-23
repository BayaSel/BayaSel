//import React from 'react'
import  {useState} from 'react'
import {Outlet, Route, Routes } from 'react-router-dom'
import AdminHeader from "./AdminHeader"
import AdminSideNav from "./AdminSideNav"
import Overview from "./Overview"
import AdminProduct from './AdminProduct'
import AdminOrder from './AdminOrder'
import Customer from './Customer'
import Analytics from './Analytics'
import Promotions from './Promotions'
import SubAdmin from './SubAdmin'
import ContentManagement from './ContentManagement'
import Settings from './Settings'


function AdminDashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <AdminHeader />
      <div className="flex bg-[#F6F6F6]">
        <div
          className={`lg:block basis-full lg:basis-1/4 -mt-20 ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <AdminSideNav onLinkClick={toggleSidebar} />
          <Outlet />
        </div>

        <div className={`lg:block basis-full lg:basis-3/4 px-4 py-5 ${
            isSidebarVisible ? "hidden" : "block"
          }`}>
            <Routes>
                <Route path="overview" element={<Overview />} />
                <Route path='admin-product' element={<AdminProduct />} />
                <Route path='admin-order' element={<AdminOrder />} />
                <Route path='admin-customer' element={<Customer />} />
                <Route path='analytics' element={<Analytics />} />
                <Route path='promotions' element={<Promotions />} />
                <Route path='sub-admin' element={<SubAdmin />} />
                <Route path='content-manage' element={<ContentManagement />} />
                <Route path='admin-settings' element={<Settings />} />
                <Route index element={<Overview />} />
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default AdminDashboard