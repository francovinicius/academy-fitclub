import styles from './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

export default function Testimonials() {
    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>Say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t"></div>
        </div>
    )
}