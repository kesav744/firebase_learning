import './SectionCompo.css';



const SectionCompo = (props) => {
    return (
      <section className='section-compo'>
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
          <button>{props.btn} &nbsp; &rarr;</button>      
      </section>
    )
  }

export default SectionCompo;
