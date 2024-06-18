import './BelowMain.css';
import pricing from '../image-sources/pricing.svg';
import tour from '../image-sources/tour.svg';
import SectionCompo from '../reuse-compo/SectionCompo';

const BelowMain = () => {
  const ourPricing = {
    contentH1: "See Our Pricing",
    contentPara: `Whether your team is a small-to-mid-size business, or a large enterprise we have a solution for you`,
    contentBtn: 'HotKup Pricing ',
  }

  const tourCont = {
    contentH1: "Tour HotKup",
    contentPara: `Find out firsthand what it's like to use HotKup. Explore cool features.`,
    contentBtn: 'Take a Tour ',
  }

  return (
    <div className='below-main'>
      <section>
        <img src={pricing} alt='pricing' />
        <SectionCompo heading={ourPricing.contentH1} para={ourPricing.contentPara} btn={ourPricing.contentBtn} />
      </section>
      <section>
        <img src={tour} alt='pricing' />
        <SectionCompo heading={tourCont.contentH1} para={tourCont.contentPara} btn={tourCont.contentBtn} />
      </section>
    </div>
  )
}

export default BelowMain;
