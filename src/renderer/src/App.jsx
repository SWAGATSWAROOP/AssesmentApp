import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssesmentForm from './components/assesmentformview'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AssesmentForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
