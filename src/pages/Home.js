import '../styles/Home.css'
import {MdOutlineEmail, 
    MdOutlineNotificationsNone, 
    MdInsertChartOutlined, 
    MdListAlt} from "react-icons/md";
import profile from '../images/perfil.png'
import Schedule from './Schedule';

const Home = () => {
    return (
        <div>
            <div className='navebar'>
                <div className='icons'>
                    <button className='iconList'><MdListAlt size={30} /></button>
                    <button><MdInsertChartOutlined size={30} /></button>
                    <button><MdOutlineNotificationsNone size={30} /></button>
                    <button><MdOutlineEmail size={30} /></button>
                </div>
                <button className='iconPhoto'><img id='profile' src={profile} alt='perfil' /></button>
            </div>
            <div className='scheduler'>
            <Schedule />

            </div>
            </div>
    )
}

export default Home;