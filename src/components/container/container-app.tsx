import SideBar from "../navs/sidebar";

interface ContainerProps {
    children: React.ReactNode;
}

function ContainerApp({ children }: ContainerProps) {
  return (
    <div className="bg-base-100 max-w-full h-screen flex flex-row gap-4 mx-auto px-2 py-2 md:px-4 py-6 xl:px-6 py-8">
      <div className="flex flex-col h-full md: md:">
        <SideBar />
      </div>
      <div className="flex flex-col w-full rounded-xl  md: md:">
        {children}
      </div>
    </div>
  );
}

export default ContainerApp;