import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["André", "Luiz", "Raquel", "João"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Maria", age: 20 },
        { id: 2, name: "luiz", age: 24 },
        { id: 3, name: "larissa", age: 25 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>Nome: {user.name} - {user.age} Anos</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;