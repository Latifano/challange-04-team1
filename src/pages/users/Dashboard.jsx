import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { getMe } from "../../redux/actions/authActions";

function Dashboard() {
  const [user, setUser] = useState("");

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_API}/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMe();
  }, []);

  // useEffect(() => {
  //   dispatch(getMe(navigate, null, null));
  // }, [dispatch, navigate]);

  return (
    <Container className="p-4">
      <h1 className="text-center">
        Hi, {user?.name} with {user?.email}!
      </h1>
      <h1 className="text-center">
        This page only can be accessed by user having login
      </h1>
    </Container>
  );
}

export default Dashboard;
