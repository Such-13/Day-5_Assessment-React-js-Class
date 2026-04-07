import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
 
const avatarColors = [
  "#e05c5c", "#e67e22", "#27ae60", "#2980b9",
  "#8e44ad", "#16a085", "#f39c12", "#c0392b"
]
 
function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
}
 
function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: "12px", fontSize: "14px" }}>
      <span style={{ fontWeight: "600", color: "#222", minWidth: "65px" }}>{label}</span>
      <span style={{ color: "#555", wordBreak: "break-all" }}>{value}</span>
    </div>
  )
}
 
function UserProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
  }, [id])
 
  if (loading) return <p style={{ textAlign: "center" }}>Loading profile...</p>
 
  const avatarColor = avatarColors[(user.id - 1) % avatarColors.length]
 
  return (
    <div style={{ maxWidth: "340px", margin: "40px auto", padding: "0 16px" }}>
 
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "#2980b9", fontSize: "14px", padding: "0",
          marginBottom: "16px"
        }}
      >
        ← Back
      </button>
 
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        overflow: "hidden"
      }}>
 
        {/* Top */}
        <div style={{
          background: "#f7f7f7",
          display: "flex", flexDirection: "column", alignItems: "center",
          padding: "32px 24px 20px",
          borderBottom: "1px solid #eee"
        }}>
          <div style={{
            width: "90px", height: "90px", borderRadius: "50%",
            background: avatarColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "32px", fontWeight: "700", color: "#fff",
            marginBottom: "14px"
          }}>
            {getInitials(user.name)}
          </div>
          <p style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700", color: "#1a1a2e" }}>
            {user.name}
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>
            {user.company.name}
          </p>
        </div>
 
        {/* Body */}
        <div style={{ padding: "20px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
 
          <p style={{ margin: "4px 0 2px", fontSize: "11px", fontWeight: "700", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" }}>
            Contact
          </p>
          <Row label="Email"   value={user.email} />
          <Row label="Phone"   value={user.phone} />
          <Row label="Website" value={user.website} />
 
          <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", margin: "4px 0" }} />
 
          <p style={{ margin: "4px 0 2px", fontSize: "11px", fontWeight: "700", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" }}>
            Address
          </p>
          <Row label="Street" value={`${user.address.street}, ${user.address.suite}`} />
          <Row label="City"   value={`${user.address.city}, ${user.address.zipcode}`} />
 
        </div>
      </div>
    </div>
  )
}
 
export default UserProfile
