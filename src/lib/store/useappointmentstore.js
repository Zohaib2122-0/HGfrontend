import { create } from "zustand";
// import axioinstance from "../axios";
import axios from "axios";

export let useappointmentstore=create((set)=>({
appointments:[],
loading:false,


createappointment:async(appointmentdata)=>{
    set({loading:true})
    try {
        const response= await axios.post("https://faisal-hm.vercel.app/api/createappointment",appointmentdata)
        set((appointmentstate)=>({
            appointments:[...appointmentstate.appointments, response.data]
        }))
    } catch (error) {
        console.log(error)
    }
},

getappoinment:async()=>{
    set({loading:true})
    try {
        let response=await axios.get("https://faisal-hm.vercel.app/api/getappointment")
        set({appointments:response.data.getappointment, loading:false})
    } catch (error) {
        console.log(error)
    }
}

}))