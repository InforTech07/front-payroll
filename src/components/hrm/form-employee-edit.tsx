"use client";
import { useForm } from "react-hook-form";
import { IEmployee, IDepartment, IJobPosition } from '@/interfaces/hrm';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { registerEmployee, updateEmployee } from "@/redux/hrm/employee-slice";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import UploadImage from "../ui/upload-image";

interface IFormCreateUpdateEmployee{
    idBtnDrawer: string;
}

function FormUpdateEmployee(){
    const router = useRouter();
    const params = useParams();
    const [isModeEdit, setIsModeEdit] = useState(false);
    const departments = useAppSelector(state => state.department.departments);
    const jobPositions = useAppSelector(state => state.jobPosition.jobPositions);
    
    const idEdit = params.id;
    
  
    const formOptions = { defaultValues: {} };

    useAppSelector(state => state.employee.employees).filter((item: IEmployee) => {
      if(item.id == idEdit){
        formOptions.defaultValues = {
          id: item.id,
          first_name: item.first_name,
          last_name: item.last_name,
          phone: item.phone,
          address: item.address,
          email: item.user?.email as any,
          picture: item.picture,
          dpi: item.dpi,
          date_hiring: item.date_hiring as any,
          date_completion: item.date_completion as any,
          birth_date: item.birth_date as any,
          gender: item.gender,
          base_salary: item.base_salary as any,
          department: item.department as any,
          job_position: item.job_position as any,
          company: item.company as any,
        }
      }
    });
  
    const {
        register, 
        handleSubmit, 
        formState:{ errors },
        reset,
        watch,
        setValue
    } = useForm<IEmployee>(formOptions as any);

    const dispatch = useAppDispatch();
    const onSubmit =   handleSubmit((data) => {
        if(isModeEdit){
          dispatch(updateEmployee(data)).then(res => {
            if(res.payload){
              router.back();
              return;
            }
          }).catch(err => {
            return;
          });
        }else{
          setIsModeEdit(true);
        }
    });

    const setUriImage = (uri:string) => {
      setValue("picture", uri);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-6 gap-2 mt-4">
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}  
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
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
                      disabled={!isModeEdit}
                      className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                    {errors?.base_salary && (
                        <label className="label">
                          <span className="text-red-600 text-xs">
                            {errors.base_salary.message}
                          </span>
                        </label>
                      )}
                </div>
                {/* <div>
                    <label className="text-gray-700 text-xs" htmlFor="department">Departamento</label>
                    <select
                      {...register("department", { required: {
                        value: true,
                        message: 'El departmento de trabajo es requerido'
                      }})}
                      name="department" 
                      id="department"
                      disabled={!isModeEdit}  
                      className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                      {
                        departments && departments.map((item: IDepartment) => (
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
                </div> */}
                {/* <div>
                    <label className="text-gray-700 text-xs" htmlFor="job_position">Puesto</label>
                    <select
                      {...register("job_position", { required: {
                        value: true,
                        message: 'El puesto de trabajo es requerido'
                      }})}
                      name="job_position" 
                      id="job_position"
                      disabled={!isModeEdit}  
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
                </div> */}
            </div>
            <UploadImage label="Fotografia" setUriImage={setUriImage} urlImage={watch('picture')}/> 
            <div className="flex justify-start mt-6">
                <button  className="btn btn-sm rounded-l btn-success text-xs">{isModeEdit? 'Actualizar': 'Editar'}</button>
            </div>
        </form>
    );
}

export default FormUpdateEmployee;