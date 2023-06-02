import style from './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export default function Plans() {
    return (
        <div className="plans-container">
            <div className="programs-header"
                style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            {/* Plans Card*/}
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) =>
                                <div className="feature">
                                    <img src={whiteTick} alt="" srcset="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                            <button className='btn'>Join Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}