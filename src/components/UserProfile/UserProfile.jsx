import { useAuth } from "../../contexts/authContext";

const UserProfile = () => {
  const { logoutHandler } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">
      <p>Name: {`${user.firstName} ${user.lastName}`}</p>
      <p>Email: {user.email}</p>

      <button className="btn outline-primary" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export { UserProfile };
