import{v2 as cloudinary}from  "cloudinary";

import fs from "fs"

// Configuration
    cloudinary.config({ 
        cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
        api_key: 'process.env.CLOUDINARY_API_KEY', 
        api_secret: 'process.env.CLOUDINARY_API_SECRET' // Click 'View Credentials' below to copy your API secret
    });

    // Upload   something audio video  image pdf

    const uploadOnCloudinary= async(localFilePath)=>{
        try{
            if(!localFIlePath)return null
            //upload file in cloudinary
           const response=await cloudinary.uploader.upload(localFilePath,{
                resource_type:"auto"
            })
            //file has uploaded sucessfully
             console.log("file is uploaded on cloudinary",response.url);
             return response;

        }catch(error){
            fs.unlinkSync(localFilePath)//remove locally saved temporary file as the upload operation got failed
            return null;
        }
    }

     export{uploadOnCloudinary}