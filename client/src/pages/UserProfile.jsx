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
        <h1>Hello {user.name}🤗</h1>
        <div className="userProfileContainer">
          <div className="sidebar">
            <h2>User Actions</h2>
            <a href="">Edit Profile 📝</a>
            <a href="">Change Password ✍️</a>
            <a href="/concern">Raise New Concern 🫣</a>
          </div>
          <div className="content">
            <h1>Your Concern History</h1>
            {userData?.msg?.map((message) => (
              <div key={message._id} className="concernCard">
                <p>Status: {message.status.toString()}</p>
                <p>Email: {message.email}</p>
                <p>Message: {message.message}</p>
                <p>Address: {message.address}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default UserProfile;
