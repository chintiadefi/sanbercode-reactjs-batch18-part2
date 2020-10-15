import React, { useState, useEffect, createContext } from "react";
import axios from 'axios'

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarBuah, setDaftarBuah] =  useState(null)

    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [daftarBuah])

      return(
          <BuahContext.Provider value={[daftarBuah, setDaftarBuah]}>
              {props.children}
          </BuahContext.Provider>
      );
}