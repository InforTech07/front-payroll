"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navs/navbar";

function LoginPage(){
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();
    //const callbackUrl = decodeURI((router.query?.callbackUrl as string) ?? "/");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
          });
        
        if (res?.error) {
            setError(res.error as string);
            return;
        }

        if (res?.ok) return router.push("/dashboard");
    }


    return (
        <>
        <Navbar showLogin={false}/>
        <div className="relative h-screen flex justify-center  bg-gray-900 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-900">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
                    <div className="rounded-xl border backdrop-blur-2xl bg-primary-100 shadow-xl">
                        <div className="lg:grid lg:grid-cols-2">
                            <div className="lg:block" hidden>
                                <div className='flex flex-col h-full p-6 sm:p-16 items-center justify-center'>
                                    <div aria-hidden="true" className="flex space-x-1">
                                        <div className="h-12 w-12 rounded-full bg-gray-900 dark:bg-white"></div>
                                        <div className="h-24 w-6 bg-primary"></div>
                                    </div>
                                    <div className="flex flex-col space-y-4">
                                        <span className="text-white mt-5 text-center text-3xl">Bienvenido a Payroll</span>
                                        <span className="text-white text-center text-3xl">Tu plataforma de nomina.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 sm:p-16 w-full flex flex-col items-center">
                                <span className="text-2xl text-gray-50 font-bold">Ingresa tus datos</span>
                                <form  onSubmit={handleSubmit} className="flex flex-col w-full space-y-8 mt-6 items-center">
                                    {error && <div className="text-red-500">{error}</div>}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-gray-50">Email:</span>
                                        </label>
                                        <input type="text" name="email" placeholder="email@example.com" className="input input-bordered input-sm w-full max-w-xs" />
                                        <label className="label">
                                            <span className="label-text-alt text-gray-50" hidden>Error</span>
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-gray-50">Contrasena:</span>
                                        </label>
                                        <input type="password" name="password" placeholder="*****" className="input input-bordered input-sm w-full max-w-xs" />
                                        <label className="label">
                                            <span className="label-text-alt text-gray-50" hidden>Error</span>
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <button type="submit" className="btn btn-accent">Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="text-center space-x-4">
                        <span>&copy; Payroll - Platform</span>
                        <a href="#" className="text-sm hover:text-blue-900">Privacidad & Terminos</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage;

{/* {
                            existAccount &&  (
                                <div className="relative w-full mb-3">
                                <label className='label text-gray-50' htmlFor="password">Password</label>
                                <input type={:'password'}`}
                                    onChange={handleChange} 
                                    name="password" 
                                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-primary-50 focus:outline-none invalid:ring-2 invalid:ring-red-400" 
                                    placeholder="Password" />
                                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
                                    <button type='button' onClick={handleConfirmPw} className=" mt-5">
                                    {confirmPw ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill='black' viewBox="0 0 640 512">
                                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' fill='black' viewBox="0 0 576 512">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>
                                    )}
                                    </button>
                                </div>
                                </div>  
                            )
                            } */}