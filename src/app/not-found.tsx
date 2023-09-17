import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Custom404: NextPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="my-4 text-center">
            <h1 className="text-2xl">Not found</h1>
            <p className="">Lo lamento, No se ha encontrado</p>
          </div>
          <Link className="btn btn-primary" href="/">
            Ir a la pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;

