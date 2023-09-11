"use client";
import { useRouter } from "next/navigation";

export default function Home(){
    const Router = useRouter();
    return (
        <div>
            <h1>This is home page</h1>
            <button onClick={()=>Router.push('/dashboard')}>Go to Dashboard</button>
            <button onClick={()=>Router.push('/users')}>Go to users</button>
        </div>
    )
}