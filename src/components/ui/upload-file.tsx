"use client";
import React, { useEffect, useState } from "react";
//import { mediaService } from "@/services/media-service";
import { toast } from "react-toastify";
import { ref , uploadBytes, getDownloadURL } from'firebase/storage';
import { storage } from '@/config'
import { generateUUID } from "@/services/tools-service";

interface UploadImageProps {
    setUriFile(uri:string): void;
}

function UploadFile({setUriFile}: UploadImageProps){
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!e.target.files) return;
        const uuid = generateUUID();
        const storagRef = ref(storage, uuid);
        try {
            await uploadBytes(storagRef, e.target.files[0] as Blob);
            const url = await getDownloadURL(storagRef);
            setUriFile(url);
            toast.success("Archivo cargada correctamente");
        } catch (error) {
            console.log(error);
            toast.error("Error al cargar la archivo");
        }

        // try {
        //     const formData = new FormData();
        //     formData.append("file", e.target.files?.length && e.target.files[0] as any);
        //     const response = await mediaService.uploadFile(formData);
        //     setUriFile(response.file);
        //     toast.success("Archivo cargada correctamente");
            
        // } catch (error) {
        //     console.log(error);
        //     toast.error("Error al cargar la archivo");
        // }
        
    };

    return(
        <div className="form-control w-full max-w-xs">
            <div className="flex">
                <div>
                    <label htmlFor="dropzone-f" className="flex flex-col items-center w-full max-w-lg p-2 text-center bg-white border-2 border-gray-300  cursor-pointer rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <h2 className="mt-1 text-xs tracking-wide text-gray-700">Cargar archivo</h2>
                        <input id="dropzone-f" type="file" onChange={handleFileChange} className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default UploadFile;
