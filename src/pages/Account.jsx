import  {useState} from 'react'
import SideBar from '../components/SideBar'
import Profile from './Profile'
import Orders from './Orders'
import SaveItems from './SaveItems'
import {Outlet, Route, Routes } from 'react-router-dom'

function Account() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div>
      <div className="flex flex-row w-screen lg:w-4/5 gap-5 mx-auto my-4 h-full" >
      <div
          className={`lg:block basis-full lg:basis-1/4 ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <SideBar onLinkClick={toggleSidebar} />
          <Outlet />
        </div>
        <div className={`lg:block basis-full lg:basis-3/4 ${
            isSidebarVisible ? "hidden" : "block"
          }`}>
            <Routes>
                <Route path="profile" element={<Profile />} />
                <Route path='orders' element={<Orders />} />
                <Route path='save-items' element={<SaveItems />} />

                <Route index element={<Profile />} />
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default Account
