import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function UserProfile() {
  const { id } = useParams() // get the user id from the url
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // fetches this specific user's data whenever the id in the url changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p style={{ textAlign: "center" }}>Loading profile...</p>

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "0 16px" }}>
      {/* back button to go home */}
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Back
      </button>

      <h1>{user.name}</h1>

      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>

      {/* address section */}
      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.suite}<br />
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  )
}

export default UserProfile