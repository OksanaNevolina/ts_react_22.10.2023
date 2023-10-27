import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {ICar} from "../interfaces/interfaceCar";
import {carsService} from "../services/carsService";
import {Outlet} from "react-router-dom";


const MainComponent = () => {
    const [trigger,setTrigger] = useState<boolean>(null);

    const [cars,setCars] = useState<ICar[]>([]);

    const [carForUpdate,setCarForUpdate] = useState<ICar>(null);


    useEffect(()=>{
        carsService.getAll().then(({data}) => setCars(data))
    },[trigger])
    return (
        <div>

            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <hr/>
            <Outlet/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {
    MainComponent
}