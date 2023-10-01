import React, { useEffect, useState } from "react";
import { mediaService } from "@/services/media-service";
import { toast } from "react-toastify";

interface UploadImageProps {
    label: string;
    setUriImage(uri:string): void;
    urlImage?: string;
    //preview: string | ArrayBuffer | null;
    //setPreview: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

function UploadImage({label, setUriImage, urlImage}: UploadImageProps){
    const [preview, setPreview] = useState<string | ArrayBuffer | null>("");

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!e.currentTarget.files) return;
        try {
            const file = e.target.files?.length && e.target.files[0];
            const formData = new FormData();
            formData.append("picture", file as Blob);
            const response = await mediaService.uploadImage(formData);
            setPreview(response.picture);
            setUriImage(response.picture);
            toast.success("Imagen cargada correctamente");
            
        } catch (error) {
            console.log(error);
            toast.error("Error al cargar la imagen");
        }
        
    };

    useEffect(() => {
        setPreview(urlImage as string);
    }, [urlImage]);

    return(
        <div className="form-control w-full max-w-xs">
            <label htmlFor="file" className="block text-sm text-gray-700">{label}</label>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        <h2 className="mt-1 font-medium tracking-wide text-gray-700">Cargar archivo</h2>
                        <input id="dropzone-file" type="file" onChange={handleFileChange} className="hidden" />
                    </label>
                </div>
                {preview && (
                    <div>
                        <img src={preview.toString()} alt="Preview" className="rounded-xl w-full h-full " />
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadImage;