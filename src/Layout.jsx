import { Outlet } from "react-router-dom"

import Sidebar from "./components/Sidebar/Sidebar"

export default function Layout() {
    return (

    <div className="tw-flex">

      <Sidebar />

      <main className="tw-flex-1 tw-h-screen tw-w-screen tw-overflow-hidden">
        <Outlet />
      </main>
      
    </div>
  )
}