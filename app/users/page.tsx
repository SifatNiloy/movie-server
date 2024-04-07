import { table } from 'console';
import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props{
    searchParams: {sortOrder: string}
}



const page = async({searchParams:{sortOrder}}:Props) => {
    
    return (
        <div>
            <h1>users</h1>
            <Link href="/users/new" className='btn '>New User</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder= {sortOrder} />
            </Suspense>
        </div>
    );
};

export default page;