import { table } from 'console';
import React from 'react';
import UserTable from './UserTable';

interface Props{
    searchParams: {sortOrder: string}
}



const page = async({searchParams:{sortOrder}}:Props) => {
    
    return (
        <div>
           <UserTable sortOrder= {sortOrder} />
        </div>
    );
};

export default page;