import SecurityImage from '../../images/security_man.jpeg'
import CCTVImage from '../../images/CCTV.jpeg'
import facilityImage from '../../images/facility.jpeg'
const CardData =[
    {
        'name': 'Security Guards and Officers',
        'ImageUrl': `${SecurityImage}`,
        'LinkName': 'More Info',
        'URl': `${'/services'}`
    },

    {
        'name': 'CCTV installation and surveillance',
        'ImageUrl': `${CCTVImage}`,
        'LinkName': 'More Info',
        'URl': `${'/services'}`
    },

    {
        'name': 'Facilities management',
        'ImageUrl': `${facilityImage}`,
        'LinkName': 'More Info',
        'URl': `${'/services'}`
    },
]

export default CardData