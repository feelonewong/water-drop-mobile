import {useEffect} from "react";
import useLatest from "./useLatest.ts";

/**
 * 组件卸载时允许
 * @param fn
 * */
const useMount = (fn:()=>void) =>{
    const fnRef = useLatest(fn)
    useEffect(()=>{
        return fnRef.current();
    },[])
}


export default useMount;
