const Header = () => {
  return (
    <>
      <div className="flex justify-end">
        <h1 className="text-sky-600 text-sm">Cell: 9176733107/8124670919</h1>
      </div>
      <div className="flex mt-3 space-x-5">
        <div>
          <img src="/src/assets/logo.jpg" alt="" className="h-14" />
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl bottom-0 jusfont-sans text-sky-600">
            Dextra Rehab & Counseling Centre
          </h1>
        </div>
      </div>
      <div className=" text-sky-600">
        <p className="text-center">
          New no.11, Old no.28,9<sup>th</sup> Avenue,
        </p>
        <p className="text-center">Ashok Nagar, Chennai-600 083</p>
      </div>
      <div className="flex justify-between  text-sky-600">
        <div>Mail id: dextraclinic@gmail.com</div>
        <div>Website: www.dextraclinic.com</div>
      </div>
    </>
  )
}

export default Header
