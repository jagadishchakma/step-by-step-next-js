import User from "@/components/User";

export default function Page({params}){
    console.log(params.userid);
    return (
        <User userid={params.userid}/>
    )
}