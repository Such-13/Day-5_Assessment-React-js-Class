import { useNavigate } from "react-router-dom"

// shows one user in the list - clicking it goes to their profile
function UserCard({ user }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ margin: "0 0 4px" }}>{user.name}</h3>
      <p style={{ margin: "0", color: "#555" }}>{user.email}</p>
      <p style={{ margin: "4px 0 0", color: "#888", fontSize: "14px" }}>{user.company.name}</p>
    </div>
  )
}

export default UserCard