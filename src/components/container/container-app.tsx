import SideBar from "../navs/sidebar";

interface ContainerProps {
    children: React.ReactNode;
}

function ContainerApp({ children }: ContainerProps) {
  return (
    <div className="bg-base-100 w-full h-screen flex flex-row gap-6 mx-auto px-2 py-2 md:px-2 py-2 xl:px-6 py-4">
          <div className="w-48">
            <SideBar />
          </div>
          <div className="w-10/12">
            {children}
          </div>
    </div>
  );
}

export default ContainerApp;