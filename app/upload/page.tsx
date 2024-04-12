'use client'
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudenaryResult{
    public_id: string;

}
const UploadPage = () => {
    const [publicId, setPublicId]= useState('')
    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='A coffee image'></CldImage>}
            <CldUploadWidget uploadPreset='y9huu68q' options={{
                sources: ['local'], multiple: false, maxFiles: 5, styles: {}
            }} onUpload={(result, widget)=>{
                if(result.event !=='success'){
                    return;
                }
                const info= result.info as CloudenaryResult
                setPublicId(info.public_id)
            }}>
                {({open})=><button className='btn btn-primary' onClick={()=> open()}>Upload</button>}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;