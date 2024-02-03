import GeneralInfo from './generalinfo'
import Header from './header'

const AssesmentForm = () => {
  return (
    <>
      <div className="flex flex-col items-center ml-8 mr-8 border-black border-2 mt-8">
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
