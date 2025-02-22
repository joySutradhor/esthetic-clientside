'use client'
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import styles from './styles.module.css'
import { FaChevronDown } from 'react-icons/fa6'
import OfficeLocation from '../OfficeLocation/page'

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <FaChevronDown className={styles.chevron} />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
)

export default function Faq () {
  return (
    <div className='e__section__gap mb-20'>
      <div className=' border p-5 lg:p-10'>
        <div>
          <button className='e__tooltip__btn'>FAQ</button>
          <h2 className='e__faq_heading'>Preguntas frecuentes comunes</h2>
        </div>
        <div className={styles.accordion}>
          {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
          <Accordion transition transitionTimeout={250}>
            <AccordionItem
              header='¿Qué es un tratamiento de limpieza facial?'
              initialEntered
            >
              Nuestro servicio de limpieza facial está diseñado para limpiar
              profundamente tu piel, eliminando impurezas y promoviendo una
              apariencia fresca y saludable. Este tratamiento de 60 minutos
              ayuda a limpiar los poros, eliminar el exceso de grasa y
              rejuvenecer la piel.
            </AccordionItem>

            <AccordionItem header='¿Qué es Plasma Rico en Plaquetas?'>
              Plasma Rico en Plaquetas (PRP) es un tratamiento que utiliza tus
              propias plaquetas sanguíneas para estimular la producción de
              colágeno, mejorar la textura de la piel y reducir arrugas. Este
              servicio de 90 minutos ayuda a rejuvenecer y restaurar el brillo
              juvenil de la piel.
            </AccordionItem>

            <AccordionItem header='¿Cómo funciona la Mesoterapia para el Acné?'>
              La Mesoterapia para el acné es un tratamiento diseñado para
              abordar las áreas propensas al acné. Consiste en inyectar una
              mezcla de vitaminas y medicamentos para reducir la inflamación,
              eliminar los brotes y mejorar el tono de la piel. El tratamiento
              dura 90 minutos.
            </AccordionItem>

            <AccordionItem header='¿Qué es el tratamiento de Hidratación?'>
              Nuestro tratamiento de Hidratación se enfoca en hidratar
              profundamente la piel para restaurar su brillo y suavidad natural.
              Ideal para pieles secas o deshidratadas, este servicio de 60
              minutos ayuda a equilibrar los niveles de humedad y mantener la
              piel saludable e hidratada.
            </AccordionItem>

            <AccordionItem header='¿Qué hace el tratamiento para ojeras?'>
              El tratamiento para ojeras está diseñado para reducir la
              hinchazón, las ojeras y las líneas finas alrededor de los ojos.
              Esta sesión de 60 minutos utiliza técnicas especializadas y
              productos para rejuvenecer la delicada piel del área ocular.
            </AccordionItem>

            <AccordionItem header='¿Qué es la Mesoterapia de Vitaminas?'>
              La Mesoterapia de Vitaminas es un tratamiento que entrega
              vitaminas directamente en la piel para aumentar el brillo, mejorar
              la elasticidad y reducir los signos del envejecimiento. Esta
              sesión de 60 minutos utiliza microinyecciones para obtener un
              resultado no invasivo y efectivo.
            </AccordionItem>

            <AccordionItem header='¿Qué es Meso Botox?'>
              Meso Botox es un tratamiento que combina mesoterapia y Botox para
              reducir las líneas finas y las arrugas mientras proporciona
              hidratación a la piel. Es un tratamiento de 30 minutos perfecto
              para quienes buscan alisar la piel y mejorar su apariencia.
            </AccordionItem>

            <AccordionItem header='¿Qué implica el tratamiento de BB Botox?'>
              BB Botox es un procedimiento estético diseñado para tratar arrugas
              y líneas finas mediante inyecciones de toxina botulínica. Ayuda a
              dar a tu piel un aspecto más suave y juvenil en solo 30 minutos.
            </AccordionItem>

            <AccordionItem header='¿Qué es el tratamiento de Ácido Hialurónico?'>
              El Ácido Hialurónico es un tratamiento diseñado para hidratar y
              dar volumen a la piel, dándole un aspecto más lleno y juvenil. Es
              perfecto para reducir las líneas finas y mejorar la elasticidad de
              la piel.
            </AccordionItem>

            <AccordionItem header='¿Qué tan efectivo es el tratamiento con Dermapen?'>
              Dermapen es un tratamiento avanzado de microagujas que estimula la
              producción de colágeno para mejorar la textura de la piel, reducir
              cicatrices y minimizar las líneas finas. Este servicio de 80
              minutos es efectivo para una amplia gama de preocupaciones de la
              piel, como las cicatrices de acné y el envejecimiento.
            </AccordionItem>

            <AccordionItem header='¿Qué es Dermaplaning?'>
              Dermaplaning es un tratamiento que exfolia la piel al eliminar las
              células muertas y el vello fino (pelusa). Este servicio de 45
              minutos deja tu piel suave, tersa y lista para la aplicación de
              maquillaje.
            </AccordionItem>

            <AccordionItem header='¿Qué son los tratamientos para Líneas Nasogenianas?'>
              El tratamiento para las Líneas Nasogenianas se enfoca en las
              líneas de sonrisa alrededor de la boca. Usamos técnicas
              especializadas para suavizar y alisar estas líneas, logrando un
              aspecto más juvenil. El tratamiento dura aproximadamente 20
              minutos.
            </AccordionItem>

            <AccordionItem header='¿Qué es el tratamiento de Labios?'>
              El tratamiento de labios consiste en agregar volumen y contorno a
              los labios mediante rellenos dérmicos inyectables. Este
              tratamiento mejora la forma y plenitud de tus labios para un
              aspecto más definido y juvenil.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
