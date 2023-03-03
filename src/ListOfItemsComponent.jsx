import React from 'react';

export default function ListOfItemsComponent(props) {
    const onInputHandler = (event) => {
        props.onFilter(event.target.value)
    }

    const items = props.items.map(item =>
    (
        <li><p key={item.name}>{item.name}</p></li>
    ));

    return (
        <>
            <input className='input' placeholder='please write a text to search' onChange={onInputHandler} />
            {
                props.items.length > 0 ?
                    <ul className='items'>
                        {items}
                    </ul>
                    :
                    <div className='items'>
                        <p>No Item Found!</p>
                    </div>
            }
        </>
    )
}