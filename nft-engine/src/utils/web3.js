// import web3 from 'web3';

// export class Web3{
//     static _instance;
//     static get instance(){
//         if(Web3._instance) return Web3._instance// checking for instance if it was there then it will return. so need of creating every singel time on refresh of page
//         Web3._instance=new web3(web3.givenProvider)// if there is no web three it will create by (web3.givenProvider) this it will connect to metamask and 
//                                                 //get the RPC and provide instance for it  
//         return Web3._instance;                     // here we are returning the instance
//     }
// }