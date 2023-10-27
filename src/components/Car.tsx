import React, {Dispatch, FC, SetStateAction} from 'react';
import {ICar} from "../interfaces/interfaceCar";
import {carsService} from "../services/carsService";
import {useNavigate} from "react-router-dom";
interface IProps {
    car:ICar,
    setTrigger:Dispatch<SetStateAction<boolean>>
    setCarForUpdate:Dispatch<SetStateAction<ICar>>
}
const Car:FC<IProps>= ({car,setTrigger,setCarForUpdate}) => {
    const {id,brand} = car;
    const navigate = useNavigate();
    const deleteCar = async  ()  => {
       await carsService.delete(id);
        setTrigger(prev => !prev)
    };

    return (
        <div>
            <div>ID--{id}</div>
            <div>brand--{brand}</div>
            <button onClick={()=>setCarForUpdate(car)}>редагувати машину</button>
            <button onClick={deleteCar}>видалити</button>
            <button onClick={()=> navigate(id.toString(), {state:car})}>детальна інформація про машину</button>
            <hr/>
        </div>
    );
};

export {
    Car
} ;