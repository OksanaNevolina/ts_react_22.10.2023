import React, {Dispatch, FC, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/interfaceCar";
import {carsService} from "../services/carsService";


interface IProps {
    setTrigger:Dispatch<SetStateAction<boolean>>,
    carForUpdate:ICar,
    setCarForUpdate:Dispatch<SetStateAction<ICar>>
}

const CarForm :FC<IProps>= ({setTrigger,carForUpdate,setCarForUpdate}) => {
    const {reset,register,handleSubmit, setValue} = useForm<ICar>();
    const save: SubmitHandler<ICar> = async (car) => {
        await carsService.create(car)
        setTrigger(prev=>!prev)
        reset()
    };

    if (carForUpdate){
        setValue('brand',carForUpdate.brand)
        setValue('price',carForUpdate.price)
        setValue('year',carForUpdate.year)

    }
    const update :SubmitHandler<ICar>= async (car) => {
        await carsService.carUpdate(carForUpdate.id, car)
        setCarForUpdate(null)
        setTrigger(prev=>!prev)
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate?'оновити':"зберегти" }</button>
            </form>
        </div>
    );
};

export {
    CarForm
}