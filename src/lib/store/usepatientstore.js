
import { create } from 'zustand';
import axioinstance from '../axios';

export const usepatientStore = create((set) => ({
  patients: [],
loading:false,
  // Create a new patient
  createPatient: async (patientData) => {
    try {
      const response = await axioinstance.post('https://faisal-hm.vercel.app/api/addpatient', patientData);
      // return response.data
      console.log('Patient created:', response.data);
      set((state) => ({
        patients: [...state.patients, response.data], // Add new patient to state
      }));
    } catch (error) {
      console.error('Failed to create patient:', error);
    }
  },



getpatient:async()=>{
  set({loading:true})
  try {
    
    let response=await axioinstance.get("https://faisal-hm.vercel.app/api/getpatient")
    set({patients:response.data.getpatient, loading:false})
  } catch (error) {
    console.log(error)
  }

}
}));




