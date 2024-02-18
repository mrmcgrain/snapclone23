import { createSlice } from '@reduxjs/toolkit';


export const cameraSlice = createSlice({

    name: `camera`,

    initialState: {

        CameraImg: null,

    },

    reducers: {
   
        setCameraImg: (state, action) => {

            state.CameraImg = action.payload;

        },
        
        resetCameraImg: (state) => {
            state.CameraImg = null

        }
        
    },

})

export const { setCameraImg, resetCameraImg } = cameraSlice.actions


export const selectCameraImg = state => state.camera.CameraImg

export default cameraSlice.reducer 