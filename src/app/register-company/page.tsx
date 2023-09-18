import ContainerBlog from "@/components/container/container";
import FormRegisterCampanies from "@/components/ui/form-register-campanies";
import Navbar from "@/components/navs/navbar";
function RegisterCompaniesPage() {
  return (
    <>
      <Navbar showLogin={false}/>
      <ContainerBlog>
          <FormRegisterCampanies />
      </ContainerBlog>
    </>
  );
}

export default RegisterCompaniesPage;