import React, {FC} from 'react';
import {ICar} from "../interfaces/interfaceCar";
interface IProps {
    car:ICar
}

const CarId:FC<IProps> = ({car:{id,brand,price,year}}) => {
    return (
        <div>
        <div>{id}---id машини</div>
        {brand} ,  ціна {price}грн
            <br/>
        Рік в якому машина була випущена на ринок {year}!!!
        </div>
    );
};

export {CarId};