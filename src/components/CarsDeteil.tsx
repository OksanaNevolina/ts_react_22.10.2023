import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../hooks/rourerHook";
import {ICar} from "../interfaces/interfaceCar";
import {carsService} from "../services/carsService";
import {CarId} from "./CarId";

const CarsDeteil = () => {
    const {state} = useAppLocation<ICar>();

    const {id} = useParams();
    const [car,setCar] = useState<ICar>(null);

    useEffect(()=>{
        if (state){
            setCar(state)
        }else {
           carsService.getIdCar(+id) .then(({data})=> setCar(data))

        }
    },[id,state])


    return (

        <div>
            {car&&<CarId car={car}/>}
        </div>
    );
};

export {
    CarsDeteil
}