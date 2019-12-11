import React from "react";
import { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

import FriendsCard from "./FriendsCard";
import FriendForm from "./FriendForm";

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

      const addFriend = friend => {
          const newFriend = {
              id: Date.now(),
              name: friend.name,
              age: friend.age,
              email: friend.email,
          };
          setFriends([...friends, newFriend]);
      };


    return (
        <div>
            <h1>Made it to the friend's list!</h1>
            {friends.map(friend => {
                return(
                    <FriendsCard
                    id={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    />
                )
            })}
            <FriendForm addFriend={addFriend}/>
        </div>
    );
};


export default FriendsList;