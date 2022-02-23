import Card1 from './Card1'
import Card2 from './Card2'
import Footer from '../../components/footer/footer'
const SectionFour = ({ S4title, ScatchPhrase, S4body1, S4body2 }) => {
    return (
        <div className="ServiceSection4">

            <div className='leftFour'><p className="pTitle">{S4title} <span><i class="bi bi-arrow-right"></i></span></p></div>
            <div className='rightFour'>
                <div className='rightFour-top'><p className="pBody">{S4body1}</p></div>
                <Card1 />
                <Card2 />

            </div>

            


        </div>
    )
}


export default SectionFour