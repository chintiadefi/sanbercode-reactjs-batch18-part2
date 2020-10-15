import React from "react"
import {BuahProvider} from './BuahContext'
import TabelBuah from './TabelBuah'
import FormBuah from './FormBuah'

const Tugas14 = () => {
    return(
        <div className="container-tugas13">
            <BuahProvider>
            <TabelBuah/>
            <FormBuah/>
            </BuahProvider>
        </div>
    );
}

export default Tugas14