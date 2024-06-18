const RightArrow = (props) => {
    return <div className={props.className} onClick={props.onClick} style={{...props.style,backgroundColor: 'chartreuse',padding: '4px'}} />
}

export default RightArrow;