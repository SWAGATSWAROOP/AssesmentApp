import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssesmentForm from './components/assesmentformview'
import ViewDetails from './components/viewdetails'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AssesmentForm />} />
          <Route path="/patientdetails" element={<ViewDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
