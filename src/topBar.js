
import './top-bar.css';
import LogoImg from '../images/Logo.png';
import AlarmModal from './Alarm_modal';

function TopBar() {
    return (
        <div className="status-bar">
            <div className="status-bar__column">
                <img src={LogoImg}
                    style={{ width: "70px", height: "30px" }} />
            </div>
            <div className="status-bar__column"></div>
            <div className="status-bar__column">

                <AlarmModal></AlarmModal>

            </div>
        </div>
    );
}

export default TopBar;
