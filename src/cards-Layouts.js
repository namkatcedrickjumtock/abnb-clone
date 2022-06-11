import React from 'react'
import Cards from './Components/card'
import { data } from './data'

const CardsLayOuts = () => {

    let customCards = data.map((item) => {
        return (<Cards
            key = {item.id}
            {...item}
        />)
    });

    return (
        <section className='container w-50 mx-auto py-5'>
            <div className="card-deck mb-5">
                {customCards}
            </div>
            <div className="card-deck mb-5">
                {customCards}
            </div>
        </section>
    )
}
export default CardsLayOuts
