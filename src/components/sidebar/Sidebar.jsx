import "./sidebar.scss";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Sidebar = forwardRef((props, ref) => {
  function updateStyle(val) {
    props.clickHandle(val);
  }

  return (
    <div className="sidebar" ref={ref}>
      <a className="closebtn" onClick={() => updateStyle("hide")}>
        &times;
      </a>
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src="https://www.commercepundit.com/wp-content/uploads/2022/10/commercepundit.svg" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center d-flex flex-column">
        <div className="account-info">
          <div className="d-flex align-items-center">
            <div className="circle">
              {props.data.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>
            <div className="account-info__item">
              <div className="account-name">{props.data.name}</div>
              <div className="account-team">{props.data.email}</div>
            </div>
          </div>
        </div>
        <ul>
          <li className="active">
            <DashboardOutlinedIcon sx={{ color: "white" }} />
            <span>Dashboard</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon sx={{ color: "white" }} />
            <span>Notification</span>
            <div className="badge badge-pill">{props.notifications.length}</div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
