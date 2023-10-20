"use client";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { apiServices } from "@/services/api-service";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { IPermission } from "@/interfaces/hrm";
import { formatDate } from "@/services/tools-service";



function PermissionPage(){
    const { data: session } = useSession();
    const [permissions, setPermissions] = useState<IPermission[]>([]);
    const divStyle ={
        backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
      };
    
      const { register, handleSubmit, formState: { errors } } = useForm<IPermission>();

      const onSubmit = handleSubmit((data) => {
        data.employee = session?.user?.employeeId as number;
        data.status = "PENDIENTE";
        data.company = session?.user?.idCompany as number;
        apiServices.post("request_absence/", data).then((res) => {
            toast.success("Permiso solicitado con exito");
            setPermissions([...permissions, res]);
        }).catch((err) => {
            toast.error("Error al solicitar el permiso");
        });
      });

      const getPermissions = async () => {
        const res = await apiServices.get("request_absence/get_requests/?employee=" + session?.user?.employeeId);
        setPermissions(res);
      };
    

    useEffect(() => {
        getPermissions();
    }, []);
    return (
        <section className="h-full rounded-md bg-cover" style={divStyle}>
    <div className="container flex flex-col h-full min-w-full px-6 py-12 mx-auto bg-black/60 rounded-md">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Formulario de Permisos</h1>
                    <form className="mt-4" onSubmit={onSubmit}>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Fecha de inicio:</label>
                            <input 
                                {...register("start_date", { required: true })}
                                type="date" 
                                className="block w-full input-sm px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Fecha de finalizacion:</label>
                            <input 
                                {...register("end_date", { required: true })}
                                type="date" 
                                className="block w-full input-sm px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Razon:</label>
                            <textarea 
                                {...register("reason", { required: true })}
                                name="reason"
                                id="reason"
                                className="block textarea-sm w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                            enviar
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-white lg:w-1/2 lg:mx-6">
                <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
                    {
                       permissions && permissions.map((item: IPermission) => (
                            <div key={item.id} className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Del:{formatDate(item.start_date)}</h2>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Al:{formatDate(item.end_date)}</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{item.reason}</p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{item.status}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
</section>
    
    );
}

export default PermissionPage;

{/* <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
                        {
                            [1,2,3,4,5].map((item) => (
                                <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                                    <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                </div>
                            ))
                        }
                    </div> */}