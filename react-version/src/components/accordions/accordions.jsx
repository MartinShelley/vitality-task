import Accordion from "../accordion/accordion";
import './styles.scss';

//fallback values
const defaultHeading = 'Display Header 3';
const defaultSubHeading = 'Content block introduction text... vestibulum molestie sodales mi a auctor. Suspendisse fermentum condimentum semper.';

const accordionItems = [1, 2, 3, 4]; //usually would be based on data for accordions. Just to match design

export default function Accordions({heading = defaultHeading, subheading = defaultSubHeading}) {
  return (
    <section className='content-section'>
      <header className="content-section__header">
        <h3 className="content-section__heading">{heading}</h3>
        <span className="content-section__subheading">{subheading}</span>
      </header>
      <div>
        {accordionItems.map((id) => (
          <Accordion key={id} index={id}/>
        ))}
      </div>
    </section>
  )
}