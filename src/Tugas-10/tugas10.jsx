import React from 'react';
import './tugas10.css';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

function Tugas10() {
  return (
      <div className="container-tugas10">
          <h1>Tabel Harga Buah</h1>
      <table>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
          {dataHargaBuah.map(item => (
          <tr>
              <td style={{width: "400px"}}>{item.nama}</td>
              <td style={{width: "200px"}}>{item.harga}</td>
              <td style={{width: "200px"}}>{item.berat/1000} kg</td>
          </tr>
          ))}
      </table>
      </div>
  );
}

export default Tugas10;
