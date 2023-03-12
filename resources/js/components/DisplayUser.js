
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function DisplayUser(){
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios.get('/api/users')
        .then(response => {
            setUsers(response.data);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    function renderTable(){
        return (
        <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">Name</th>
                    <th scope="col" class="px-6 py-4">Email</th>
                    <th scope="col" class="px-6 py-4">Roles</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                        <tr class="border-b dark:border-neutral-500" key={user.id}>
                            <td class="whitespace-nowrap px-6 py-4">{user.name}</td>
                            <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
                            <td class="whitespace-nowrap px-6 py-4">
                                <ul>
                                    {
                                        user.roles.map(role => (
                                        <li key={role.id}>{role.name}</li>
                                        ))
                                    }
                                </ul>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        )
    }

    return(
        <div>
            {
                !loading ? renderTable() : <Loading/>
            }
        </div>
    )
}

export default DisplayUser