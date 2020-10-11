import React from 'react';
import './App.css';

function App() {
  return (
  <div className="App">
  <h2>Form Pembelian Buah</h2>
  <form>
    <div>
    <legend>Nama Pelanggan</legend>
    <legend>Daftar Item</legend>
    <br/>
    <button type="submit">Kirim</button>
    </div>
    <div>
    <input type="text" name="name"/>
    <br/>
    <br/>
    <input type="checkbox" name="semangka" value="semangka"/>
    <label>Semangka</label>
    <br/>
    <input type="checkbox" name="jeruk" value="jeruk"/>
    <label>Jeruk</label>
    <br/>
    <input type="checkbox" name="nanas" value="nanas"/>
    <label>Nanas</label>
    <br/>
    <input type="checkbox" name="salak" value="salak"/>
    <label>Salak</label>
    <br/>
    <input type="checkbox" name="anggur" value="anggur"/>
    <label>Anggur</label>
    </div>
  </form>
  </div>
  );
}

export default App;
