import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className='container'>
                <img src='Assets/herogbg.png' alt='hero-img' className='img-fuid mx-auto d-block mt-5  mb-2' />
                <div className='col w-75 my-2  mx-auto'>
                    <h1 className='font-weight-bold'>
                        Online Experiences
                    </h1>
                    <p>
                        Join unique interactive activities led by <br />
                        one of a kind hosts all without leaving home.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
