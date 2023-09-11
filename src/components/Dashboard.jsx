"use client";
import { useRouter } from "next/navigation";

export default function Dashboard(){
    const Router = useRouter();
    return (
        <div>
            <h1>This is Dashboard Page</h1>
            <button onClick={()=>Router.push('/')}>Go to Home</button>
        </div>
    )
}