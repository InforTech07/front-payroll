"use client";
import { useSession } from "next-auth/react";
function PlatformPage(){
    const {data: session, status} = useSession();
    return(
        <div>
            <h1>Platform Page</h1>
            <p>{status}</p>
            <pre className="text-gray-700">{JSON.stringify(session, null, 2)}</pre>
        </div>
    )
}

export default PlatformPage;