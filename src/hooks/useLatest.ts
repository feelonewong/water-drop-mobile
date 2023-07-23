import {useRef} from "react";

/**
 * 组件卸载时允许
 * @param fn
 * */
const useLatest = <T>(value: T) =>{
    const ref = useRef(value)
    ref.current = value;
    return ref;
}

export default useLatest;
