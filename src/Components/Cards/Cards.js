import React from 'react'
import Spinners from '../Layout/Spinners'
import CardItem from './CardItem'

function Cards({ items, isLoading }) {
    return isLoading ? (
        <Spinners />
    ) : (
            <section className="cards">
                {
                    items.map(item => (
                        <CardItem item={item} key={item.char_id} />
                    ))
                }
            </section>
        )
}

export default Cards
