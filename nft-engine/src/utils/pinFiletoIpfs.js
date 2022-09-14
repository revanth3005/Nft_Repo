 import axios from 'axios'
export const PinFileToIPFS =async(formData)=>{
    try {
        //we are just defning a normal config file for API call
         const config={
            method: 'POST',
            url : `https://api.pinata.cloud/pinning/pinFileToIPFS`,//endpoint url
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5ODVkYWVkNy03MjI1LTRlNTUtOGJjYy05Zjk5NTg3M2Y1ZWUiLCJlbWFpbCI6InJldmFudGhuc3JuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjNzczZmU2MTQ5YzM1NjViMjE1YyIsInNjb3BlZEtleVNlY3JldCI6Ijk0ZjlkN2VjNjQ3MDJhMDc5NzYyMTUwOTZhNmE3MmNjOTZjNjViMzJlZWYxZmQ3NGM1NTljZjhhZDg4YWM4ZTUiLCJpYXQiOjE2NjMwNTM0MDd9.Q1Cb8ypkj-S4YH21TvN8thXt9u-tgmshQif04Xf3tcI",
                "Content-Type": `multipart/form-data`
            },
            data:formData//the dada is from the components from FED
         }
         return axios(config)

    } catch (error) {
        console.log(error);
        throw error
    }
}