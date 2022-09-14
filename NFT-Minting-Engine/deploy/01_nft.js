const func =async (hre) =>{
    const {deployments,getNamedAccounts}=hre;
    const {deployer}= await getNamedAccounts();
    const {deploy}=deployments;

    await deploy('Nsrn_NFT',{
        from:deployer,
        log:true,
        skipIfAlreadyDeployed:true,
        args:['NSRN_NFT',"Demo_NFT"]
    })
}

func.tags=['Nsrn_NFT'];
module.exports=func;