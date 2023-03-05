import React from 'react';
import { generateKeyString } from 'src/utils/strings';
import { Users } from 'src/Pages/UsersScreen/reducer';

type Props = {
    onFilter: (value: string) => void;
    items: Users[];
}

export default function ListOfItemsComponent(props: Props) {
    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => props.onFilter(event.target.value);

    const items = props.items.map((item, index) =>
    (
        <li><p key={generateKeyString(item.name, index)}>{item.name}</p></li>
    ));

    const getList = () => (
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
    )

    return (
        <>
            <div className='input-container'>
                <input type='text' className='input' placeholder='please write a text to search' onChange={onInputHandler} />
            </div>
            <div>
                <p>{items.length} users in list</p>
            </div>
            {getList()}
        </>
    )
}