import React from 'react'
import SubImg from './sub_img.png'

export default function Subscription() {

    return (
        <section className='sub'>

           
            <div className='sub_details'>

                    <div className='sub_img'>
                        <img src={SubImg} alt="" />

                    </div>

                    <div className='sub_items'>
                            <div className='sub_text'>
                            <h3>Interested in Tendering </h3>
                             <h3>Join us now </h3>
                            </div>

                        <form>
                            <input type="email" name="Email" placeholder='Email'/>
                            <button type="submit" class="btnsub">Join</button>
                        </form>

                     </div>
                
                

            </div>

        </section>
    )
}