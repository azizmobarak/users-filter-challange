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
            <div className='input-container'>
                <input className='input' placeholder='please write a text to search' onChange={onInputHandler} />
            </div>
            <div>
                <p>{items.length} users in list</p>
            </div>
            <div className='list-container'>
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
            </div>
        </>
    )
}