import ContainerApp from "@/components/container/container-app";
import NavbarApp from '@/components/navs/navbar-app';
import Table from "@/components/ui/table";
function EmployeesPage() {
  return (
    <ContainerApp>
        <div className='flex flex-col md:space-x-4'>
            <NavbarApp title='Empleados'/>
            <Table />
        </div>
    </ContainerApp>
  );
}

export default EmployeesPage;