import React from 'react'
import Design1 from '../../../assets/design-1.png'
import Design2 from '../../../assets/design-2.png'
import Design3 from '../../../assets/design-3.png'
import Design4 from '../../../assets/design-4.png'
import Design5 from '../../../assets/design-5.png'
import Design6 from '../../../assets/design-6.png'

const Design = () => {
    return (
        <div className='avax'>
            <div className="absolute w-full z-20 md:block hidden">
                <img src={Design1} alt="Design" width={260} className='absolute top-0 right-[10%] z-10' />
                <img src={Design2} alt="Design" width={160} className='absolute top-[100px] left-[14%] z-10' />
                <img src={Design3} alt="Design" width={160} className='absolute top-[180px] left-[5%] z-10' />
                <img src={Design4} alt="Design" width={340} className='absolute top-[220px]  right-[1%] z-10' />
                <img src={Design5} alt="Design" width={180} className='absolute top-[520px] right-[24%] z-10' />
                <img src={Design6} alt="Design" width={180} className='absolute top-[480px] left-[24%] z-10' />
            </div>
        </div>

    )
}

export default Design;

