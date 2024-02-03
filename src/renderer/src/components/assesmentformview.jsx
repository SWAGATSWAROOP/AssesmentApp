import GeneralInfo from './generalinfo'
import Header from './header'
import Navigation from './navbar'

const AssesmentForm = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center m-8 border-black border-2">
        <div className="mt-20 mb-8 border-b-2 border-black">
          <Header />
        </div>
        <header className="text-2xl text-center mb-3">ASSESSMENT FORM</header>
        <GeneralInfo />
      </div>
    </>
  )
}

export default AssesmentForm
