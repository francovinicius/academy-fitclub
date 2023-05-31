import styles from './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

export default function Programs (){
    return (
        <div className='Programs' id='Programs'>
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                        <img src={RightArrow} alt="" srcset="" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}