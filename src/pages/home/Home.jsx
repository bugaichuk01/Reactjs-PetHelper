import React from 'react';
import API from "../../utils/API";

function Home({currentUser}) {
    return (
        <div>
            <p>mail - {currentUser.email}</p>
            <p>username - {currentUser.username}</p>
            <p>status - {currentUser.status}</p>
            <p>role - {currentUser.role}</p>
            <button onClick={() => API.getAllUsers().then(res => console.log(res.data))}>Get Users</button>
        </div>
    );
}

export default Home;