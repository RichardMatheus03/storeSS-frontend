import { Outlet } from "react-router-dom"

import Sidebar from "./components/Sidebar/Sidebar"

export default function Layout() {
    return (

    <div className="tw-flex tw-w-screen tw-h-screen">

      <Sidebar />

      <main className="tw-flex-1 tw-h-100 tw-w-100 tw-overflow-hidden">
        <Outlet />
      </main>
      
    </div>
  )
}