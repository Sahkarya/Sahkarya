import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [userDataFetched, setUserDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:80/api/data/user?email=${user.email}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  if (user && !userDataFetched) {
    fetchData();
    setUserDataFetched(true);
  }

  if (userData) {
    console.log(userData.msg);
  }

  if (!userData) {
    return <p>Loading user data...</p>; // Or any loading indicator
  } else {
    return (
      <>
        <div id="body">
          <div id="background1">
            <div id="img1">
              <img src="profile.png" alt="don't show" />
            </div>
            <div id="heading1">
              <h1>Hey, {user.name}</h1>
            </div>
            <div id="email">
              {user.email}
              <i
                class="ri-verified-badge-line"
                style={{ color: "blueviolet" }}
              ></i>
            </div>
          </div>
          <div className="userProfileContainer">
            <div id="sidebar">
              <h2>User Actions</h2>
              <div id="edit">
                <a href="">
                <i class="ri-edit-box-line"></i>Edit Profile
                </a>
              </div>
              <div id="change-password">
                <a href="">
                   <i class="ri-lock-password-line"></i> Change Password
                </a>
              </div>
              <div id="new-concern">
                <a href="/concern">
                 <i class="ri-questionnaire-line"></i>  Raise New Concern
                </a>
              </div>
            </div>
            <div id="content">
              <div id="content1">
              <h1>Your Concern History</h1>
              </div>
              {userData?.msg?.map((message) => (
                <div key={message._id} id="concernCard">
                  <p>Status: {message.status.toString()}</p>
                  <p>Email: {message.email}</p>
                  <p>Message: {message.message}</p>
                  <p>Address: {message.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserProfile;
