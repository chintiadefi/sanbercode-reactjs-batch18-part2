import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import axios from 'axios'

const TabelBuah = () => {
    const [daftarBuah, setDaftarBuah] = useContext(BuahContext)
    const [setInput] = useContext(BuahContext)

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

    return(
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default TabelBuah