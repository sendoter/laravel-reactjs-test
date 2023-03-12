import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import DisplayUser from './components/DisplayUser';
import AddUser from './components/AddUser';

function Main() {
    const [page, setPage] = useState("main")
    const [buttonText, setButtonText] = useState("+ Add User")

    useEffect(() => {
        if(page === "add"){
            setButtonText("← Go Back")
        }
        if(page === "main"){
            setButtonText("+ Add User")   
        }
    }, [page])

    function buttonClicked(){
        if(page === "main"){
            setPage("add")
        }
        if(page === "add"){
            setPage("main")
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-2/4 bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                        <h2 className="text-lg font-medium text-gray-800">Laravel + ReactJS Test</h2>
                        <button onClick={buttonClicked} className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">{buttonText}</button>
                    </div>
                    <div className="px-4 py-2">
                        { page === "main" ? <DisplayUser/> : null}
                        { page === "add" ? <AddUser setPage={setPage}/> : null}
                    </div>
            </div>
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
