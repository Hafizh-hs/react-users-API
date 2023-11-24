import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="container p-3">
        <Outlet />
      </div>
    </>
  );
}
