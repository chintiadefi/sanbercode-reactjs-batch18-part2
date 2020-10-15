import React, {useState, useEffect} from "react"
import axios from "axios"
import "./tugas13.css"

const Tugas13 = () => {  
  const [daftarBuah, setDaftarBuah] =  useState(null)
  const [input, setInput]  =  useState({name: "", price: "", weight: 0, id: null})

  useEffect( () => {
    if (daftarBuah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
      })
    }
  }, [daftarBuah])
  
  const handleDelete = (event) => {
    let idDataBuah = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
    .then(() => {
      setDaftarBuah(null)
    })
          
    
  }
  
  const handleEdit = (event) =>{
    let idDataBuah = parseInt(event.target.value)
        
    axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
    .then(res => {
      let dataBuah = res.data
      setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
    })
  
  }

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
    <div className="container-tugas13">
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

            {
              daftarBuah !== null && daftarBuah.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td style={{width: "100px"}}>{index+1}</td>
                    <td style={{width: "200px"}}>{item.name}</td>
                    <td style={{width: "100px"}}>{item.price}</td>
                    <td style={{width: "100px"}}>{item.weight/1000} Kg</td>
                    <td style={{width: "200px"}}>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {/* Form */}
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
        </div>
  )
}

export default Tugas13
