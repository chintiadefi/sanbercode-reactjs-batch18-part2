import React, {useContext, useState} from "react"
import {BuahContext} from './BuahContext'
import axios from 'axios'

const FormBuah = () => {

    const [daftarBuah, setDaftarBuah] = useContext(BuahContext)
    const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "name":
          {
            setInput({...input, name: event.target.value});
            break
          }
          case "price":
          {
            setInput({...input, price: event.target.value});
            break
          }
          case "weight":
          {
            setInput({...input, weight: event.target.value});
              break
          }
        default:
          {break;}
        }
      }
    
      const handleSubmit = (event) =>{
        event.preventDefault()
    
        let name = input.name
        let price = input.price.toString()
        
    
        if (input.id === null){        
          axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: input.weight})
          .then(res => {
              setDaftarBuah([
                ...daftarBuah, 
                { id: res.data.id, 
                  name, 
                  price,
                  weight: input.weight
                }])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, price, weight: input.weight})
          .then(() => {
              let dataBuah = daftarBuah.find(el=> el.id === input.id)
              dataBuah.name = name
              dataBuah.price = price
              dataBuah.weight = input.weight
              setDaftarBuah([...daftarBuah])
          })
        }

        setInput({name: "", price: "", weight: 0, id: null})
      }

    return(
        <React.Fragment>
                  <h1>Form Daftar Harga Buah</h1>
          <form onSubmit={handleSubmit}>
            <label style={{marginRight: "10px"}}>Nama:</label>
            <input style={{marginRight: "10px"}} type="text" required name="name" value={input.name} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{marginRight: "10px"}}>Harga:</label>
            <input type="text" required name="price" value={input.price} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{marginRight: "10px"}}>Berat (dalam gram):</label>
            <input style={{marginRight: "10px"}} type="number" required name="weight" value={input.weight} onChange={handleChange}/>
            <br/>
            <br/>
            <div>
              <button>submit</button>
            </div>
          </form>
        </React.Fragment>
    );
}

export default FormBuah