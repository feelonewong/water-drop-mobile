import useMount from "./useMount.ts";
import {useState} from "react";

const  useRequest = (service:(params:Record<string, string>)=>Promise<unknown>, params:Record<string, string>) =>{
    const [data, setData] = useState<unknown>()
    const [loading, setLoading] = useState<boolean>(false)
    useMount(()=>{
        setLoading(true)
        service(params).then((res)=>{
            setData(res);
            setLoading(false)
        }).catch(()=>{
            setLoading(false)
        })
    })
    return [loading,data]
}


export default useRequest;