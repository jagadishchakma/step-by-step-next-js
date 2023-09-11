import Link from "next/link";

export default async function User({userid}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const user = await res.json();
    return(
        <div>
            <h1>{user.name}</h1>
            <button><Link href="/users">Go Back</Link></button>
            <ul>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
            </ul>
        </div>
    )

}