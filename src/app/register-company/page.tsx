import ContainerBlog from "@/components/container/container";
import FormCreateCompany from "@/components/register-company/form-company";
import Navbar from "@/components/navs/navbar";
function RegisterCompaniesPage() {
  return (
    <>
      <Navbar showLogin={false}/>
      <ContainerBlog>
        <div className="relative h-screen flex flex-col items-center justify-center">
          <FormCreateCompany />
        </div>
      </ContainerBlog>
    </>
  );
}

export default RegisterCompaniesPage;