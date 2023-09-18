"use client";
import Navbar from "@/components/navs/navbar";
import FormLogin from "@/components/ui/form-login";
import ContainerBlog from "@/components/container/container";

function LoginPage(){

    return(
        <>
            <Navbar showLogin={false}/>
            <ContainerBlog>
                <FormLogin />
            </ContainerBlog>
        </>
    )
}

export default LoginPage;