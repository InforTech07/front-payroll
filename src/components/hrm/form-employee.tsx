"use client";
import { useForm } from "react-hook-form";
import { IEmployee, IDepartment, IJobPosition } from '@/interfaces/hrm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerEmployee, updateEmployee } from "@/redux/hrm/employee-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import UploadImage from "../ui/upload-image";

interface IFormCreateUpdateEmployee{
    idBtnDrawer: string;
}

function FormCreateUpdateEmployee({idBtnDrawer}: IFormCreateUpdateEmployee){
    const {data: session, status} = useSession();
    const params = useParams();
    const departments = useAppSelector(state => state.department.departments);
    const jobPositions = useAppSelector(state => state.jobPosition.jobPositions);
    const date = new Date(2029,10,10);
    const dateCompletion = date.toISOString().split('T')[0];
  
    const formOptions = {
        defaultValues: {
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          address: "",
          picture: "",
          dpi: "",
          date_hiring: Date.now(),
          date_completion: dateCompletion,
          birth_date: Date.now(),
          gender: "",
          base_salary: 0,
          department: "",
          job_position: "",
          company: "1",
        }
    }

    const {
        register, 
        handleSubmit,
        setValue, 
        formState:{ errors },
        reset,
    } = useForm<IEmployee>(formOptions as any);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        dispatch(registerEmployee(data)).then(res => {
          if(res.payload){
            reset();
            document.getElementById(idBtnDrawer)?.click();
            return;
          }}).catch(err => {
            return;
          });
    });

    const setUriImage = (uri: string) => {
      setValue('picture', uri);
    }
   
    return (
      <div className="drawer drawer-end">
      <input id={idBtnDrawer} type="checkbox"  className="drawer-toggle"/>
      <div className="drawer-content">
      </div> 
      <div className="drawer-side z-10">
          <label htmlFor={idBtnDrawer} className="drawer-overlay"></label>
          <div className="menu p-4 w-96 min-h-full bg-base-200">
              <span className="text-gray-700 text-md text-center">Nuevo Empleado</span>
              <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-2 mt-4">
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="first_name">Nombres</label>
                          <input
                            {...register("first_name", { required: {
                              value: true,
                              message: 'El nombre es requerido'
                            }})}
                            name="first_name" 
                            id="first_name" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.first_name && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.first_name.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="last_name">Apellidos</label>
                          <input
                            {...register("last_name", { required: {
                              value: true,
                              message: 'El apellido es requerido'
                            }})}
                            name="last_name" 
                            id="last_name" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.last_name && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.last_name.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="phone">Telefono</label>
                          <input
                            {...register("phone", { required: {
                              value: true,
                              message: 'El telefono es requerido'
                            }})}
                            name="phone" 
                            id="phone" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.phone && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.phone.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="address">Direccion</label>
                          <input
                            {...register("address", { required: {
                              value: true,
                              message: 'La direccion es requerida'
                            }})}
                            name="address" 
                            id="address" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.address && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.address.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="email">Correo electronico (usuario)</label>
                          <input
                            {...register("email", { required: {
                              value: true,
                              message: 'El correo es requerido'
                            }})}
                            name="email" 
                            id="email" 
                            type="email"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.email && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.email.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="dpi">DPI</label>
                          <input
                            {...register("dpi", { required: {
                              value: true,
                              message: 'El dpi es requerido'
                            }})}
                            name="dpi" 
                            id="dpi" 
                            type="text"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.dpi && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.dpi.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="gender">Genero</label>
                          <select
                            {...register("gender", { required: {
                              value: true,
                              message: 'El genero es requerido'
                            }})}
                            name="gender" 
                            id="gender"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                          </select>
                          {errors?.gender && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.gender.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="birth_date">Fecha de nacimiento</label>
                          <input
                            {...register("birth_date", { required: {
                              value: true,
                              message: 'La fecha de nacimiento es requerido'
                            }})}
                            name="birth_date" 
                            id="birth_date" 
                            type="date"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.birth_date && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.birth_date.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="date_hiring">Fecha de contratacion</label>
                          <input
                            {...register("date_hiring", { required: {
                              value: true,
                              message: 'La fecha de contratacion es requerido'
                            }})}
                            name="date_hiring" 
                            id="date_hiring" 
                            type="date"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.date_hiring && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.date_hiring.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div className="hidden">
                          <label className="text-gray-700 text-xs" htmlFor="date_completion">Fecha Terminacion</label>
                          <input
                            {...register("date_completion", { required: {
                              value: false,
                              message: 'No es obligatorio'
                            }})}
                            name="date_completion" 
                            id="date_completion" 
                            type="date"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.date_completion && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.date_completion.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="base_salary">Salario Base</label>
                          <input
                            {...register("base_salary", { required: {
                              value: true,
                              message: 'El salario es requerido'
                            }})}
                            name="base_salary" 
                            id="base_salary" 
                            type="number"
                            className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                          {errors?.base_salary && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.base_salary.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="department">Departamento</label>
                          <select
                            {...register("department", { required: {
                              value: true,
                              message: 'El departmento de trabajo es requerido'
                            }})}
                            name="department" 
                            id="department"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            {
                              departments.map((item: IDepartment) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                              ))
                            }
                          </select>
                          {errors?.department && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.department.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <div>
                          <label className="text-gray-700 text-xs" htmlFor="job_position">Puesto</label>
                          <select
                            {...register("job_position", { required: {
                              value: true,
                              message: 'El puesto de trabajo es requerido'
                            }})}
                            name="job_position" 
                            id="job_position"  
                            className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                            {
                              jobPositions.map((item: IJobPosition) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                              ))
                            }
                          </select>
                          {errors?.job_position && (
                              <label className="label">
                                <span className="text-red-600 text-xs">
                                  {errors.job_position.message}
                                </span>
                              </label>
                            )}
                      </div>
                      <UploadImage setUriImage={setUriImage} label="Avatar"/>
                      <div>
                        <input 
                        {...register("company", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="company" 
                          name="company" 
                          type="text" 
                          value={session?.user?.idCompany} hidden />
                      </div>
                      <div>
                        <input 
                        {...register("create_user", { required: {
                          value: false,
                          message: 'La compania es requerida'
                        }})}
                          id="create_user" 
                          name="create_user" 
                          type="checkbox" 
                          checked={true} hidden />
                      </div>
                  </div>
                  <div className="flex justify-start mt-6">
                      <button className="btn btn-sm rounded-l btn-success text-xs">Guardar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
}

export default FormCreateUpdateEmployee;