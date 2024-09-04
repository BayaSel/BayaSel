//import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import AdminHeader from "./AdminHeader";
import AdminSideNav from "./component/AdminSideNav";
import Overview from "./Overview";
import AdminProduct from './AdminProduct';
import AdminOrder from './AdminOrder';
import Customer from './Customer';
import Analytics from './Analytics';
import Promotions from './Promotions';
import SubAdmin from './SubAdmin';
import ContentManagement from './ContentManagement';
import Settings from './Settings';
import '../../transitions.css';

function AdminDashboard() {
  const location = useLocation();
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <AdminHeader />
      <div className="flex bg-[#F6F6F6]">
        {/* Sidebar */}
        <div
          className={`lg:block basis-full lg:basis-1/4 -mt-20 transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <AdminSideNav onLinkClick={toggleSidebar} />
        </div>

        {/* Main Content with Transitions */}
        <div className={`lg:block basis-full lg:basis-3/4 px-4 py-4`}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <div>
                <Routes location={location}>
                  <Route path="overview" element={<Overview />} />
                  <Route path="admin-product" element={<AdminProduct />} />
                  <Route path="admin-order" element={<AdminOrder />} />
                  <Route path="admin-customer" element={<Customer />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="promotions" element={<Promotions />} />
                  <Route path="sub-admin" element={<SubAdmin />} />
                  <Route path="content-manage" element={<ContentManagement />} />
                  <Route path="admin-settings" element={<Settings />} />
                  <Route index element={<Overview />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
