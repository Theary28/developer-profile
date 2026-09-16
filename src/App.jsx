import './App.css'

function StatusBadge({ isAvailable }) {
  return (
    <span className={isAvailable ? 'status open' : 'status busy'}>
      {isAvailable ? 'Open to work' : 'Busy learning'}
    </span>
  )
}

function App() {
  const name = 'Eav Chansotheary'

  return (
    <main className="profile">
      <h1>{name}</h1>

      <p>
        My goal for this course is to improve my React skills and build
        real-world web applications.
      </p>

      <StatusBadge isAvailable={true} />
    </main>
  )
}

export default App