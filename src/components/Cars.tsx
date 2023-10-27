import React, {Dispatch, FC, SetStateAction} from 'react';
import {Car} from "./Car";
import {ICar} from "../interfaces/interfaceCar";


interface IProps {
    cars:ICar[],
    setTrigger:Dispatch<SetStateAction<boolean>>,
    setCarForUpdate:Dispatch<SetStateAction<ICar>>

}

const Cars: FC<IProps> = ({cars,setTrigger,setCarForUpdate}) => {


    return (
        <div>

            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {
    Cars
}