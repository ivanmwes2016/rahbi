import './about.css'
const MiddleSection = ({title, about}) => {

    return(
        <div className="contentHolder">
            <div className="title"><p>{title}</p></div>
            <div className ="dataContainer"><p>{about}</p></div>
            <div className="empty"></div>

        </div>
    )


}

export default MiddleSection