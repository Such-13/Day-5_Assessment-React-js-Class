import { useState, useEffect } from "react"
import UserCard from "../components/UserCard"

function Home() {
  // store the users list and a loading flag
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // runs once when the page loads - fetches all users from the api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, []) // empty array means this only runs once

  if (loading) return <p style={{ textAlign: "center" }}>Loading users...</p>

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: "24px" }}>User Directory</h1>

      {/* loop through users and show a card for each one */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Home