import NsrnNFTAbi from './abi/Nsrn_NFT.json'


export const ContractAddress ={
     Nsrn_Nft:'0x5B4c1FdbCB09E606fCf9aA67f0b1E00C3c92C1D9'
     // taking the address from the abi.
}

// here we can pass n number of contracts so that why we were taking an array
// in contracts like we can pass with the contract Address respectively their abi


export const contracts=[
    {
        name:'Nsrn_NFT',
        abi:NsrnNFTAbi.abi,
        address:ContractAddress.Nsrn_Nft
    }
]


// here we will pass the contracts to the web3 that will provide the 
// instance of the provided contract