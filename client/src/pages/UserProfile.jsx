import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
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

    fetchData();
  }, [user.email]);

  console.log(userData);
  if (userData) {
    console.log(userData.msg);
  }
};

export default UserProfile;
