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

export default function App () {
  return (
    <div className='e__section__gap mb-20'>
      <div className=' border p-5 lg:p-10'>
        <div>
          <button className='e__tooltip__btn'>FAQ</button>
          <h2 className='e__faq_heading'>Common FAQ questions</h2>
        </div>
        <div className={styles.accordion}>
          {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header='What is Lorem Ipsum?' initialEntered>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header='Where does it come from?'>
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
            </AccordionItem>

            <AccordionItem header='Why do we use it?'>
              Suspendisse massa risus, pretium id interdum in, dictum sit amet
              ante. Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
