"use client";
import {useSession, signOut} from 'next-auth/react';

function DashboardPage(){
    const {data: session, status} = useSession();

    return (
    <div>
        <h1>Dashboard Page</h1>
        <pre>
            {JSON.stringify(session, null, 2)}
        </pre>
        <button  className="btn btn-accent" 
        onClick={() => {
          signOut();
        }}
        >Salir</button>
    </div>)
}

export default DashboardPage;