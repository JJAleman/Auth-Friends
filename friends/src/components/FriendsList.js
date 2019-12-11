import React from "react";
import { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";


const FriendsList = () => {

    const [ friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/friends")
        .then(res => {
            console.log("Hi List of friends", res);
            const friendsList = res.data
            setFriends(friendsList);
        })
        .catch (err => {
          console.log("Error", err);
        })
      }, []);


    return (
        <div>
            <h1>Made it to the friend's list!</h1>
        </div>
    );
};


export default FriendsList;