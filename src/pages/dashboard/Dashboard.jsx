import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import UserInfo from "../../components/userinfo/UserInfo";
import SubscriptionList from "../../components/subcriptionlist/SubscriptionList";
import SummaryCard from "../../components/summarycard/SummaryCard";
// import NotificationPanel from "../../components/NotificationPanel/NotificationPanel";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Home = () => {
  const [style, setStyle] = useState("hide");
  const [userData, setUserData] = useState(null);
  const [isModeChange, setModeChange] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mockData.json");
        const data = await response.json();
        setUserData(data.user);
        setSubscriptions(data.subscriptions);
        setNotifications(data.notifications);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const changeStyle = (val) => {
    setStyle(val);
  };

  const onModeChange = (val) => {
    setModeChange(val);
  };

  return (
    <div className={style + " home " + `${isModeChange ? " dark" : "light"}`}>
      {userData && (
        <>
          <Sidebar
            data={userData}
            notifications={notifications}
            clickHandle={() => changeStyle("hide")}
          />
          <div className="homeContainer">
            <button className="openbtn" onClick={() => changeStyle("show")}>
              <MenuOutlinedIcon /> CP
            </button>
            <Navbar
              userData={userData}
              notifications={notifications}
              onModeChange={onModeChange}
            />
            <div className="widget">
              <UserInfo userData={userData} />
              <SummaryCard subscriptions={subscriptions} />
              <SubscriptionList subscriptions={subscriptions} />
            </div>

            {/* <NotificationPanel notifications={notifications} /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
