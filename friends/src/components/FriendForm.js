import React, { useState } from "react";

const FriendForm = props => {

const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: "",
});

const handleChange = e => {
    setFriend({...friend, [e.target.name]: e.target.value});
};

const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(friend);
    setFriend({
        name: "",
        age: "",
        email: "",
    });
};

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add A friend to the list</h2>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            value={friend.name}
            name="name"
            type="text"
            onChange={handleChange}
            />
            <label htmlFor="age">Age</label>
            <input
            id="age"
            value={friend.age}
            name="age"
            type="text"
            onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            value={friend.email}
            name="email"
            type="text"
            onChange={handleChange}
            />
            <button type="submit">Add Friend</button>

        </form>
    )
}

export default FriendForm;