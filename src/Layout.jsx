import { Outlet } from "react-router-dom"

import Sidebar from "./components/Sidebar"

export default function Layout() {
    return (

    <div className="tw-flex">

      <Sidebar />

      <main className="tw-flex-1 tw-p-4">
        <Outlet />
      </main>
      
    </div>
  )
}