import React from 'react';

interface Props{
    params: {id: number}
}
const UserDetailPage = ({params:{id} }:Props) => {
    return (
        <div>
            <h1>user{id}</h1>
            
        </div>
    );
};

export default UserDetailPage;