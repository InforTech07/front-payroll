"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { getDepartments } from "@/redux/hrm/department-slice";
import { getJobPositions } from "@/redux/hrm/job-position-slice";
import { getEmployees } from "@/redux/hrm/employee-slice";
import { getPayrollPeriods } from "@/redux/pm/payroll-period-slice";
import { useRouter } from "next/navigation";

function PlatformPage(){
    const {data: session, status} = useSession();
    const dispatch = useAppDispatch();
    const router = useRouter();

    const getData = async () => {
        if(session?.user?.idCompany !== undefined){
            dispatch(getDepartments(session?.user?.idCompany as number));
            dispatch(getJobPositions(session?.user?.idCompany as number));
            dispatch(getEmployees(session?.user?.idCompany as number));
            dispatch(getPayrollPeriods(session?.user?.idCompany as number));
        }
    }


    useEffect(() => {
        if(status === "authenticated"){
            getData();
        }else{
            router.push("/");
        }
    }, []);
    return(
        <div>
            <h1>Platform Page</h1>
            <p>{status}</p>
            <pre className="text-gray-700">{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default PlatformPage;