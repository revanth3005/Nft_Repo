import { contracts } from "../config";
import { Web3 } from "./web3";

export class ContractsInstance{
    static _instance;
    
    static get instance(){
        const web3=Web3._instance; 
        const Contracts={};
        contracts.forEach((c)=>{
            Contracts[c.name]=new web3.eth.Contract(
                c.abi,
                c.address 
            )
        })
        ContractsInstance._instance=Contracts;
        return ContractsInstance._instance 
    }
}


//here web3.eth.Contracts will give the contract setup 
// we are looping the contracts that were provided in the contracts.js file
//name was provided by there