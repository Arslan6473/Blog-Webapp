import React from 'react'
import JoditEditor from 'jodit-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <JoditEditor
        value={defaultValue}
        tabIndex={1} 
        onChange={onChange}
        />
    )}
    />

     </div>
  )
}

