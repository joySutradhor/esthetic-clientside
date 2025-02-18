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
            <button className='e__tooltip__btn'>About Us</button>
            <h2 className='mt-3 mb-8'>
              Our Dream Is Global Learning Transfromation
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including ed in the 1960s with the release of Letraset sheets
              containing geMaker including five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including
              versions of Lorem Ipsum. ktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum{' '}
            </p>

          
          </div>

          <div className='hidden xl:block'>
            <button className='e__tooltip__btn'>Our Goal</button>
            <h2 className='mt-3 mb-8'>
              Our Dream Is Global Learning Transfromation
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including ed in the 1960s with the release of Letraset sheets
              containing geMaker including five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing geMaker including
              versions of Lorem Ipsum. ktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum{' '}
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
                <p>Happy Customers</p>
                <h2>50K+</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Natural Ingredients</p>
                <h2>100%</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Years of Experience</p>
                <h2>10+</h2>
              </div>
            </div>
            <div className='e__secondary__bg p-4 rounded-md '>
              <div>
                <p>Products Sold</p>
                <h2>500K+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='e__about__bussines__wrapper '>
              <button className='e__tooltip__btn'>Workflow</button>
              <h2 className='mt-3 mb-8'>Our Workflow strategy</h2>
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
