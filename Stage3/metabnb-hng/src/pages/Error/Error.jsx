import "./error.css"

const Error = () => {
  return (
    <div className="ErrorContainer">
      <h1>Error</h1>
      <p>Woops. There was an error! </p>
      <button onClick={() => navigate("/")}>Go back Home</button>
    </div>
  )
}

export default Error