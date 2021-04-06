import { useEffect } from "react";
import useRouter from 'next/router';

const NotFound = () => {
    const router: any = useRouter.router;
    
    useEffect(() => {
        router.replace('/')
    })
    return <h1>404 not found</h1>;
}
export default NotFound