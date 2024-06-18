import './ReUseSpan.css';

const ReUseSpan = (props) => {
    return <>{props.text.map(t => <span className='abs-span' key={t}>{t}</span>)}
    </>
}

export default ReUseSpan;