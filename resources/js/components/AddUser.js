import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

function AddUser({setPage}){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/roles')
        .then(response => {
            setRoles(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleRoleChange = (event) => {
        const role = event.target.value;
        if (event.target.checked) {
            setSelectedRoles([...selectedRoles, role]);
        } else {
            setSelectedRoles(selectedRoles.filter(r => r !== role));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            name: name,
            roles: selectedRoles
        };
        axios.post('/api/users/submit', data)
        .then(response => {
            alert(response.data.message);
            setPage("main");
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    const isSubmitDisabled = selectedRoles.length === 0;

    return(
        <div>
            <form onSubmit={handleSubmit} className="w-full mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="border w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="border w-full rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Roles: </label> {isSubmitDisabled && <p className="text-red-500">Please select at least one role.</p>}
                    {
                        !loading ? roles.map(role => (
                            <div key={role.id} className="mb-2">
                                <input type="checkbox" id={`role-${role.id}`} value={role.id} onChange={handleRoleChange} className="mr-2 leading-tight"/>
                                <label htmlFor={`role-${role.id}`} className="text-gray-700">{role.name}</label>
                            </div>
                        )) : 
                        <Loading/>
                    }
                </div>
                
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitDisabled}>Submit</button>
                
            </form>
        </div>
    )
}

export default AddUser;
