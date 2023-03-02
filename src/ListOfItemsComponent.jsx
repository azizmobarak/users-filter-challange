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
        <div>
            <input className='input' placeholder='please fill something to search' onChange={onInputHandler} />
            {
                props.items.length > 0 ?
                    <ul>
                        {items}
                    </ul>
                    :
                    <p>No Item Found!</p>
            }
        </div>
    )
}