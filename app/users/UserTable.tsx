import React from 'react';
interface user{
    id: number,
    name: string,
    email: string,
}
const UserTable = async() => {
    const res=  await fetch('https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' });
    const users: user[] = await res.json();
    return (
        <div>
            <h1>users</h1>
            <p className='text-2xl'>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user=> <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr> )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;