import Graidentbutton from "../GraidentButton/Graidentbutton"
import {AiOutlinePlusSquare} from 'react-icons/ai'
import './MintForm.css'
import { useRef, useState } from "react"

//UTILS
import { PinFileToIPFS } from "../../utils/pinFiletoIpfs"//API calling 
import { contracts } from "../../config"

const MintForm = () =>{
 
    const [title,setTitle] = useState("");// handling title
    const [description,setDescription]=useState("");
    //whenever we upload a Image we will generate an object url(temp url) to give an preivew on UI and the
    // the raw will store the info of the Image files
    const [image,setImage]=useState({
        preview:"",
        raw:null
    })

    const uploadImageRef=useRef();//uses to open the files by DOM (not by viratual DOM)
    // by using useref we can call directely DOM elements and we can use them.

    //when the function calls the files will be open, when we click on the upload Images
    const openFileSystem=(e)=>{
        e.preventDefault();
        uploadImageRef.current.click();
    }


    const handelTitleChange=(e)=> setTitle(e.target.value)//handling the title 
    const handelDescriptionChange=(e)=> setDescription(e.target.value)//handling the decs
    
    //handeling the Images by when ever we try to upload an Image creating a file 
    const handelImageChange=(e)=>{
        const file=e.target.files[0];
        // whenever we upload an file in html it will consider array of files, it may be one or more we will get the output as array of 
        //files thats why we are keeping 0 as the first files to 
        const preview=URL.createObjectURL(file);// to create an objecturl from file
        setImage({
            preview,// it was for to display on the UI.
            raw:file// it was to store the Image details.
        })
    }

    //Minting NFT
    
    const mintHandler = async()=>{
        try {
            const image_formData=new FormData();// we are creating an formdata 
            image_formData.append('file', image.raw, image.raw?.name)// we are adding the data of image parameters are 1)type of file 2)image info 3)name 
            const imageUploadResult=await PinFileToIPFS(image_formData)// by pasing this data to PinFileToIPS to ge the IPFS hash for Image (nothing but adding our photo)
            //console.log(imageUploadResult.data?.IpfsHash);// consoleing the output

            const metaData_formData= new FormData();// we are creating metadata

            const metadataBlob= new Blob(
                [JSON.stringify(
                    {title,description,image:`ipfs://${imageUploadResult.data?.IpfsHash}`},
                    // when we are stringify it will combine all the data into a singel string so we need provide the replacer as null and we should have to 
                    // provide the space as 2
                    null,//replacer with null if not this will be into a singel string
                    2//
                )],
                {type:'application/json'});// type of data passing

            metaData_formData.append('file',metadataBlob,title);// adding the data to metadata_formData
            const metadataUploadResult=await PinFileToIPFS(metaData_formData)// sending the data to PinFileToIPFS to get the hash
            //console.log(metadataUploadResult.data?.IpfsHash);//consoling the metadata hash 
        
            
            const ethers=require('ethers')
            const provider= new ethers.providers.Web3Provider(window.ethereum,"any");// we are trying to get the web3 provider from window ethereum from metamask which will inject web3 to our browser
            const signer=provider.getSigner()// getting our address like taking private key from my address
            const contract= new ethers.Contract( // creating contract instance
                contracts[0].address,
                contracts[0].abi,
                signer
            )
            // console.log(contract);
            // here we are calling the metamask like as making sure metamask is connected with our  react application so we get the wallet address 
            const accounts=await window.ethereum .request(
                {method:'eth_requestAccounts'}
            )
            // need to check
            // //  const totalSupply=await contract.totalSupply.call(
            // //     {from:accounts[0]}
            // //  )
            // //  console.log(totalSupply);
            const txn=await contract.mint(// caling the mint function fro metadata
                accounts[0],
                5,
                `ipfs://${metadataUploadResult.data?.IpfsHash}`//uri
            )
            //console.log(txn);
        setImage({
            preview:"",
            raw:null
        })
        setTitle('');
        setDescription('')
        alert('Mint Success');
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }

    return(
        <div className={'mint'}>
            <div className={'mint-form'}>
                <input type="file" style={{display:'none'}}  ref={uploadImageRef} onChange={handelImageChange}/>
                <div className={'image-upload-container'} onClick={openFileSystem}>
                    {
                        image?.preview ?
                        <div className={'image-holder'}>
                            <img src={image?.preview} alt="Image Not found" />
                        </div>
                         :<div className={'upload-image'} >
                            <AiOutlinePlusSquare/>
                            <strong>upload Image</strong>
                        </div> 
                    }
                </div>
                <input type="text"placeholder="Title" value={title} onChange={handelTitleChange}/>
                <textarea name="description" placeholder='Description' id="" cols="15" rows="4" value={description} onChange={handelDescriptionChange}></textarea>
                <Graidentbutton buttonText={'MINT-NFT'} onClick={mintHandler}/>
                {/* we are calling the minthandeler function by onclick to mint the data */}
            </div>
        </div>  
    )
}

export default MintForm


