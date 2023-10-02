import { IFamilyMember } from "@/interfaces/hrm";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerFamilyMember, deleteFamilyMember, getFamilyMembers } from "@/redux/hrm/family-member-slice";
import { useEffect } from "react";

function TableFamilyMember(){
    const dispatch = useAppDispatch()
    const params = useParams()
    const familyMembers = useAppSelector(state => state.familyMember.familyMembers);
    let familyMembersStored: IFamilyMember[] = [];
    if(Array.isArray(familyMembers)){
        familyMembersStored = familyMembers.filter((item: IFamilyMember) => item.employee === parseInt(params.id as string))
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFamilyMember>();

    const onSubmit =   handleSubmit((data) => {
        dispatch(registerFamilyMember(data)).then(res => {
          if(res.payload){
            reset();
            return;
          }}).catch(err => {
            return;
          });
    });

    const handleDelete = (id: number) => {
        confirm('¿Estas seguro de eliminar este familiar?') && dispatch(deleteFamilyMember(id))
    }

    useEffect(() => {
        dispatch(getFamilyMembers(params.id as string))
    }, [])

    return(
        <details className="collapse bg-base-200">
            <summary className="collapse-title text-l text-gray-700">Familiares</summary>
            <div className="collapse-content"> 
            <section className="w-full py-4">
            <div className="flex flex-col gap-4">
            <details className=" w-30 collapse bg-white">
                <summary className="collapse-title text-l text-gray-700">Nuevo</summary>
                <div className="collapse-content">
                    <section className="container px-4 mx-auto text-gray-700">
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-4 gap-2">
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
                                    <label className="text-gray-700 text-xs" htmlFor="last_name">Apellidos:</label>
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
                                    <label className="text-gray-700 text-xs" htmlFor="phone">Telefono:</label>
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
                                    <label className="text-gray-700 text-xs" htmlFor="relationship">Relacion Familiar: </label>
                                    <select
                                        {...register("relationship", { required: {
                                        value: true,
                                        message: 'La relacion  es requerido'
                                        }})}
                                        name="relationship" 
                                        id="relationship"  
                                        className="select select-sm block w-full text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">
                                        <option value="Padre">Padre</option>
                                        <option value="Madre">Madre</option>
                                        <option value="Hijo">Hijo</option>
                                        <option value="Hija">Hija</option>
                                        <option value="Esposo">Esposo</option>
                                        <option value="Esposa">Esposa</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                    {errors?.relationship && (
                                        <label className="label">
                                            <span className="text-red-600 text-xs">
                                            {errors.relationship.message}
                                            </span>
                                        </label>
                                        )}
                                </div>
                                <div>
                                    <label className="text-gray-700 text-xs" htmlFor="gender">Genero: </label>
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
                                <div className="hidden">
                                    <label className="text-gray-700 text-xs" htmlFor="employee">Telefono:</label>
                                    <input
                                        {...register("employee", { required: {
                                        value: true,
                                        message: 'El telefono es requerido'
                                        }})}
                                        name="employee" 
                                        id="employee" 
                                        type="text"
                                        value={params.id} 
                                        className="block w-full input-sm px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
                                        {errors?.employee && (
                                            <label className="label">
                                                <span className="text-red-600 text-xs">
                                                {errors.employee.message}
                                                </span>
                                            </label>
                                        )}
                                </div>
                            </div>
                            <div className="flex justify-start mt-6">
                                <button className="btn btn-sm rounded-l btn-success text-xs">Guardar</button>
                            </div>
                        </form>
                    </section>
                </div>   
            </details> 
            <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center gap-x-3">
                                        <span>Nombre del familiar</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Relacion Familiar</span>
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <button className="flex items-center gap-x-2">
                                        <span>Telefono del familiar</span>
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Genero</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">opciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {familyMembersStored && familyMembersStored.map((item: IFamilyMember, index) => (
                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">{item.first_name + ' ' + item.last_name}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                            <h2 className="text-sm font-normal text-emerald-500">{item.relationship}</h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{item.phone}</td>
                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{item.gender}</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button  onClick={()=>handleDelete(item.id as number)}   className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>

                                            <button className="text-gray-500 hidden transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </details>
    )
}

export default TableFamilyMember;