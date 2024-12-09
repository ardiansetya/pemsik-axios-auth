import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RenderData from "../pages/RenderData";

const AdminLayout = ({ children }) => {
  return (
      <div className="h-full">
        <div className="flex gap-5">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <div className="py-5">
              <RenderData />
            </div>
            {children}
          </div>
        </div>
      </div>
  );
};

export default AdminLayout;
