import { table } from 'console';
import React from 'react';
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
           <UserTable sortOrder= {sortOrder} />
        </div>
    );
};

export default page;