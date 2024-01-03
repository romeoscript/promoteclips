import React from 'react'
import './review.css'
export default function Review() {
  return (
    <div className='plan'>
        <h1 className='selectPlan'>Select a Plan</h1>
        <input type="range"  />
        <div className='prices'>
            <div className='pricesPacks'>
                <h2>Starter Pack</h2>
                <h1>$10 <br /><span>/month, billed annually</span></h1>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="Accepted" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <button className='planbtn'>Choose Plan</button>
            </div>
            <div className='pricesPacks'>
                <h2>Starter Pack</h2>
                <h1>$10 <br /><span>/month, billed annually</span></h1>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="Accepted" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <button className='planbtn'>Choose Plan</button>
            </div>
            <div className='pricesPacks'>
                <h2>Starter Pack</h2>
                <h1>$10 <br /><span>/month, billed annually</span></h1>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="Accepted" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <div className='requirements'>
                    <img src="icons/mask.png" alt="" /><p>1,000 high-quality YouTube views </p>
                </div>
                <button className='planbtn'>Choose Plan</button>
            </div>
        </div>
    </div>
  )
}
