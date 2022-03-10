import React from 'react';
import API from "../../utils/API";

function Home({currentUser}) {
    API.getByUsername(currentUser.username).then(res => console.log(res.data))

    return (
        <div>
            <p>mail - {currentUser.email}</p>
            <p>username - {currentUser.username}</p>
            <p>status - {currentUser.status}</p>
            <p>role - {currentUser.role}</p>
        </div>
    );
}

export default Home;