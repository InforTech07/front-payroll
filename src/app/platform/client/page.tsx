"use client";
import { ICompany } from "@/interfaces/companies";

import { useState, useEffect } from "react";
import { apiServices } from "@/services/api-service";
import NavbarApp from "@/components/navs/navbar-app";



function ClientPage() {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const fetchCompanies = async () => {
    const companies = await apiServices.get('company/')
    console.log(companies)
    setCompanies(companies.results);
  }
    useEffect(() => {
        fetchCompanies();
    }, []);


  return (
    <div>
        <NavbarApp title="Clientes" idBtnDrawer="id" btnNew={false} />
      <h1>{
          Array.isArray(companies) && companies.map((company) => {
          return <div key={company.name} className="text-black">{company.name}</div>
        })
        }</h1>
    </div>
  )
}

export default ClientPage;