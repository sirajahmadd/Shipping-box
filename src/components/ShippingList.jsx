import React from 'react'
import { useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items, setItems] = useState([]);

    const addToList = (item) => {
        const itemsCopy = [...items];
        itemsCopy.push(item);
        setItems(itemsCopy);
    }
    return (
        <div>
            <ShippingForm addToListCallback={(value) => addToList(value)} />
            <h1>Shipping table</h1>
            <table>
                <thead>
                    <th>title</th>
                    <th>number</th>
                    <th>color</th>
                    <th>place</th>
                    <th>weight</th>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            console.log(item);
                            return (
                                <tr key={item.title}>
                                    <td>{item.item}</td>
                                    <td>{item.itemNum}</td>
                                    <td>
                                        <div style={{backgroundColor:item.itemColor, width: "60px", height:"30px" }}></div>
                                    </td>
                                    <td>{item.itemPlace}</td>
                                    <td>{item.itemWeight}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShippingList