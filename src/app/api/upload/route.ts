import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dwumx1sul', 
  api_key: '726143737941331', 
  api_secret: 'bCJWJuHEbms8Xtkrt3490y9r5J4' 
});



export async function POST(request:Request){
    const data = await request.formData();
    const image:any = data.get("file")

    if(!image) {
        return NextResponse.json("No file uploaded", {status: 400});
    }

    const bytes = await image.arrayBuffer() as ArrayBuffer;
    const buffer = Buffer.from(bytes);

    // const filePath = path.join(process.cwd(), "public", image.name as string);
    // await writeFile(filePath, buffer);
    const response:any = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, res) => {
            if(err) reject(err);
            resolve(res);
        }).end(buffer);
    })
    
    return NextResponse.json({
        message: "File uploaded",
        url: response.secure_url as any,
    });
}