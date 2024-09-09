
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from './Nav';




export const MainLayout = () => {
  return (
    <>

      <div className="relative h-screen">

        <Nav >
          <div >
            <Outlet />
          </div>
        </Nav>


      </div>
    </>

  );
};


