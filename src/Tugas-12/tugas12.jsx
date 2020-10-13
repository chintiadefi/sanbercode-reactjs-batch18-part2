import React, {Component} from "react"
import "./tugas12.css"

class Tugas12 extends Component{

  constructor(props){
    super(props)
    this.state ={
     pesertaLomba : [ 'Budi', 'Susi', 'Lala', 'Agung' ],
     inputName : "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({inputName: event.target.value});
  }

  handleDelete(event) {
    let index = event.target.value;
    this.state.pesertaLomba.splice(index, 1);
    this.setState({pesertaLomba: this.state.pesertaLomba})
  }

  handleEdit(event) {
    let index = event.target.value
    this.setState({inputName: this.state.pesertaLomba[index]})
    this.state.pesertaLomba.splice(index, 1);
    this.setState({pesertaLomba: this.state.pesertaLomba})
  }

  handleSubmit(event){
    event.preventDefault()
      this.setState({
        pesertaLomba: [...this.state.pesertaLomba, this.state.inputName],
        inputName: ""
      })
  }

  render(){
    return(
      <div className="container-tugas12">
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th style={{width: "100px"}}>No</th>
              <th style={{width: "300px"}}>Nama</th>
              <th style={{width: "100px"}}>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.pesertaLomba.map((val, index)=>{
                  return(                    
                    <tr>
                      <td>{index+1}</td>
                      <td>{val}</td>
                      <td>
                        <button value={index} onClick={this.handleEdit.bind(this)} style={{marginRight: "10px"}}>Edit</button>
                        <button value={index} onClick={this.handleDelete.bind(this)}>X</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Peserta</h1>
        <form onSubmit={this.handleSubmit}>
          <label style={{marginRight: "10px"}}>
            Masukkan nama peserta:
          </label>   
          <input required type="text" value={this.state.inputName} onChange={this.handleChange} style={{marginRight: "10px"}}/>
          <button>submit</button>
        </form>
        </div>
    )
  }
}

export default Tugas12