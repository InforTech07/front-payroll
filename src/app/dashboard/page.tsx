import ContainerApp from '@/components/container/container-app';
function DashboardPage(){
    return (
    <ContainerApp>
        <div className='bg-base-200 flex flex-col md:flex-row md:space-x-4'>
            <h1>Dashboard Page</h1>
            <pre>
                {/* {JSON.stringify(session, null, 2)} */}
            </pre>
        </div>
    </ContainerApp>
    )
}

export default DashboardPage;