"use client";
import ContainerApp from '@/components/container/container-app';
import NavbarApp from '@/components/navs/navbar-app';
import Table from '@/components/ui/table';
import Tabs from '@/components/ui/tabs';
import { useSession } from 'next-auth/react';

function DashboardPage(){
    const {data: session, status} = useSession();
    return (
    <ContainerApp>
        <div className='flex flex-col md:space-x-4'>
            <NavbarApp title='Dashboard'/>
            <Tabs />
            {/* <h1>Dashboard Page</h1> */}
            <pre>
                {JSON.stringify({
                    session,
                    status
                }, null, 2)}
            </pre>
            <Table />
        </div>
    </ContainerApp>
    )
}

export default DashboardPage;