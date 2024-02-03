import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AssesmentForm from './components/assesmentformview'

const App = () => {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/assesmentform" element={<AssesmentForm />} />
          <Route />
        </Routes>
      </Router> */}
      <AssesmentForm />
    </>
  )
}

export default App
