import React, {useState} from "react"
import "./tugas12.css"


function Tugas12() {
const [dataBuah, setDataBuah] =  useState([
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
])
const [inputName, setInputName]  =  useState("")
const [inputPrice, setInputPrice]  =  useState("")
const [inputWeight, setInputWeight]  =  useState(0)
const [indexOfForm, setIndexOfForm] =  useState(-1)  

const handleDelete = (event) => {
  let index = event.target.value
  let newDataBuah = dataBuah
  let editedBuah = newDataBuah[indexOfForm]
  newDataBuah.splice(index, 1)

  if (editedBuah !== undefined){
    // array findIndex baru ada di ES6
    var newIndex = newDataBuah.findIndex((el) => el === editedBuah)
    setDataBuah([...newDataBuah]) 
    setIndexOfForm(newIndex)
    
  }else{
    
    setDataBuah([...newDataBuah])
  }
  
}

const handleEdit = (event) =>{
  let index = event.target.value
  let buah = dataBuah[index]
  setInputName(buah.nama)
  setInputPrice(buah.harga)
  setInputWeight(buah.berat)
  setIndexOfForm(index)
}

const handleChange = (event) =>{
  let typeOfInput = event.target.name
  switch (typeOfInput) {
    case "name" :
      {
        setInputName(event.target.value);
        break
      }
      case "price" :
        {
          setInputPrice(event.target.value);
          break
        }
        case "weight" :
          {
            setInputWeight(event.target.value);
            break
          }
          default:
            {break;}
  }
}

const handleSubmit = (event) =>{
  event.preventDefault()

  let name = inputName
  let price = inputPrice
  let weight = inputWeight

  let newDataBuah = dataBuah
  let index = indexOfForm

    if (index === -1){
      newDataBuah = [...newDataBuah, {name, price, weight}]
    }else{
      newDataBuah[index] = {name, price, weight}
    }
    
    setDataBuah(newDataBuah)
    setInputName("")
    setInputPrice("")
    setInputWeight(0)
  }


  return(
    <div className="container-tugas12">
    <h1>Daftar Peserta Lomba</h1>
    <table>
      <thead>
        <tr>
          <th style={{width: "400px"}}>Nama</th>
          <th style={{width: "200px"}}>Harga</th>
          <th style={{width: "200px"}}>Berat</th>
          <th style={{width: "200px"}}>Action</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {
            dataBuah.map((val, index)=>{
              return(                    
                <tr key={index}>
                  <td>{val.nama}</td>
                  <td>{val.harga}</td>
                  <td>{val.berat}</td>
                  <td>
                    <button value={index} onClick={handleEdit} style={{marginRight: "10px"}}>Edit</button>
                    <button value={index} onClick={handleDelete}>X</button>
                  </td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    {/* Form */}
    <h1>Form Peserta</h1>
    <form onSubmit={handleSubmit}>
      <label style={{marginRight: "10px"}}>
        Masukkan nama peserta:
      </label>   
      <input type="text" value={inputName} name="name" onChange={handleChange} style={{marginRight: "10px"}}/>
      <label style={{marginRight: "10px"}}>
        Masukkan harga buah:
      </label>   
      <input type="text" value={inputPrice} name="price" onChange={handleChange} style={{marginRight: "10px"}}/>
      <label style={{marginRight: "10px"}}>
        Masukkan berat buah:
      </label>   
      <input type="number" value={inputWeight} name="weight" onChange={handleChange} style={{marginRight: "10px"}}/>
      <button>submit</button>
    </form>
    </div>
  );
  }


export default Tugas12