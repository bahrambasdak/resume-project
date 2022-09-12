import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import classes from "../styles.module.scss";



const Dashboard = () => {

    const {user} = useAuth();

    useEffect(()=>{
        console.log('dashboard');
        console.log(user);
    })
    return ( 
        <div className={classes.page_wraper}>dashboard</div>
     );
}
 
export default Dashboard;