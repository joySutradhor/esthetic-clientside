import AllService from "@/app/_components/AllService/page"


function OurServices () {

  return (
    <section className='e__section__gap'>
      <div className='e__service__container'>
        <div>
          <button className='e__tooltip__btn'>Lo que ofrecemos</button>
          <h2 className='e__service__heading'>Nuestro compromiso con las clientes</h2>
        </div>

        {/* services card */}
        <div>
          <AllService/>
        </div>
      </div>
    </section>
  )
}

export default OurServices
