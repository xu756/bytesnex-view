import './index.less';
import { useMount } from 'ahooks';

const HomePage = () => {
    useMount(()=>{
        console.log(process.env);
    });
    return(
        <div className="home-page">
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;
