import Image from 'next/image'
import React from 'react'
import founder from '@/public/founder/founderofestehtic.jpg'
import skincareWorkflow from '@/public/FakeDb/workflow.json'

function AboutUs () {
  return (
    <section className='e__section__gap'>
      <div className='e__about__container'>
        <div className='space-y-10'>
          <div>
            <button className='e__tooltip__btn'>Sobre nosotras</button>
            <h2 className='mt-3 mb-8'>
              ¡Vamos a compartir un poco sobre nosotros! ¡Estamos emocionados de
              que nos conozcas!
            </h2>
            <p>
              ¡Vamos a compartir un poco sobre nosotros! Con más de 10+ años de
              experiencia en el cuidado de la piel, somos un equipo dedicado y
              apasionado que ofrece servicios excepcionales en Brandon, Florida.
              Nos enorgullece brindar a nuestros clientes no solo resultados
              visibles, sino también una experiencia memorable y placentera.
              Cada día, nos esforzamos por proporcionar un ambiente acogedor
              donde nuestros clientes se sientan cómodos, relajados y cuidados
              mientras reciben nuestros servicios de alta calidad. <br></br>{' '}
              <br></br>
              En nuestro centro, nos especializamos en tratamientos
              personalizados que promueven la salud y belleza de la piel.
              Creemos que cada persona merece sentirse bien consigo misma, por
              eso nos aseguramos de que cada visita sea única y adaptada a las
              necesidades individuales de nuestros clientes. <br></br> <br></br>
              Te invitamos a visitarnos y descubrir cómo podemos ayudarte a
              lograr la piel radiante y saludable que mereces. ¡Nos encantaría
              tenerte en nuestro centro y ofrecerte un servicio excepcional!
            </p>
          </div>

          <div className='hidden xl:block'>
            <button className='e__tooltip__btn'>Nuestro objetivo</button>
            <h2 className='mt-3 mb-8'>
              Transformando la piel, transformando vidas
            </h2>
            <p>
              En nuestra clínica de cuidado de la piel de lujo en Brandon,
              Florida, creemos que transformar tu piel es mucho más que una
              cuestión de apariencia; se trata de transformar tu vida. Con más
              de siete años de experiencia, nos hemos dedicado a ayudar a
              nuestros clientes a lograr una piel radiante y saludable que
              aumente su confianza y mejore su bienestar. Nuestro equipo de
              expertos utiliza tratamientos personalizados y productos de alta
              calidad para cuidar tu piel, adaptando cada servicio a tus
              necesidades únicas. Ya sea que vengas por un facial rejuvenecedor
              profundo, tratamiento para el acné o cuidados antienvejecimiento,
              te garantizamos un ambiente acogedor donde podrás relajarte,
              recargar energías y vivir la mejor experiencia en cuidado de la
              piel. En el corazón de todo lo que hacemos está el deseo genuino
              de ayudarte a lucir y sentirte lo mejor posible, porque cuando tu
              piel brilla, tu confianza resplandece aún más.
            </p>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={founder}
              alt='founder image'
              className='aspect-video  object-cover object-bottom rounded-md'
            ></Image>
          </div>
          <div className='e__about__expertise'>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Paciente feliz</p>
                <h2>1K+</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Ingredientes naturales</p>
                <h2>100%</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Años de experiencia</p>
                <h2>10+</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Productos Servir</p>
                <h2>5K+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='e__about__bussines__wrapper '>
        <button className='e__tooltip__btn'>Flujo de trabajo</button>
        <h2 className='mt-3 mb-8'>Nuestra estrategia de flujo de trabajo</h2>
        <div className='e__about__workflow__container '>
          {skincareWorkflow?.workflow?.map(step => (
            <div
              key={step.step}
              className='p-2 lg:p-4 e__secondary__bg rounded-md'
            >
              <p>
                {step.step}. {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
