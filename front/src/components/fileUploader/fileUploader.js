import React, { useState, useEffect} from "react";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import {imageInfoSlice, imageContentSlice, validateSlice} from "storage/features/ticket/ticketSlice";
import getToken, {validate} from "services/webservice";
import getImageInfo from "services/image";

import "./fileUploader.css"

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [isImageInfoCharge, setImageInfoCharge] = useState(false);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [parseImage, setParseImage] = useState({});

  const dispatch = useDispatch()

  const upload = () => {

    var form = new FormData();

    form.append('image', currentFile , currentFile.name)


    const imageInfo = getImageInfo(form)

    imageInfo.then(Response => {
        let data = JSON.stringify(Response.data, null, 2)

        setParseImage(JSON.parse(data))
        
        dispatch(imageInfoSlice(data))
        setImageInfoCharge(true)
    })

    setSelectedFiles(undefined)
    
  };

  
  const PutimageinRedux = (file) => {
    const reader = new FileReader()


    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
   
      const base64 = reader.result
      dispatch(imageContentSlice(base64))

    }

    reader.readAsDataURL(file)

  }
  

  const onDrop = (files) => {

    setSelectedFiles(files)
    setCurrentFile(files[0])
    PutimageinRedux(files[0])
    dispatch(imageInfoSlice(undefined))
    dispatch(validateSlice(undefined))
  }


  useEffect(()=> {
    dispatch(imageInfoSlice(undefined))
    dispatch(imageContentSlice(undefined))
  },[])


  const handlerValidate = async() => {
    //console.log(parseIamge["ID.TRA"].trim())

    const keys = Object.keys(parseImage)
    
    let key = ""

    keys.forEach(subKey => {
       if(subKey.includes("ID TRA") || subKey.includes("ID.TRA") || subKey.includes("NO.TR") || subKey.includes("NO TR")){
        key = subKey
       }
    })

    const auth = await getToken()
    const validateTicket = await validate(auth.data.token, parseImage[key].trim())

    dispatch(validateSlice(validateTicket.data))
    
    setImageInfoCharge(false)
    dispatch(imageInfoSlice(undefined))
    dispatch(imageContentSlice(undefined))
  }



  return (
    <div>
 
    <div className="mx-9">
        <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />

                    {selectedFiles && selectedFiles[0].name ? (
                        <div className="selected-file">
                        {selectedFiles && selectedFiles[0].name}
                        </div>
                    ) : (
                        "aqui deja caer el ticket"
                    )}
                    </div>
                    <aside className="selected-file-wrapper">
                    <button
                        className="btn btn-success my-3"
                        disabled={!selectedFiles}
                        onClick={upload}

                    >
                        cargar
                    </button>

                    <button className="btn btn-success m-3"
                      disabled = {!isImageInfoCharge}
                      onClick = {handlerValidate}
                    >
                        validar
                    </button>
                    </aside>
                </section>
                )}
            </Dropzone>
    </div>
       
      </div> 
  );
};

export default UploadFiles;