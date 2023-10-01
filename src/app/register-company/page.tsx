import ContainerBlog from "@/components/container/container";
import FormCreateCompany from "@/components/register-company/form-company";
import Navbar from "@/components/navs/navbar";
function RegisterCompaniesPage() {
  return (
    <>
      <Navbar showLogin={false}/>
      <ContainerBlog>
          <FormCreateCompany />
      </ContainerBlog>
    </>
  );
}

export default RegisterCompaniesPage;