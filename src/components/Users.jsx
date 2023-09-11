
import Link from "next/link";


export default async function Users(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return (
        <div>
            <Link href="/">Go to home</Link>
            <ul>
                {data.map((user,index) => (
                    <li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>
                ))}
            </ul>
        </div>
    )
};
