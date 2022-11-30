const {ethers} = require("hardhat")

async function main(){
    //call contract Tendersafi
    const TenderSafiContract  = await ethers.getContractFactory("Bider");
   

    //Deploy TenderSafi Contract
    const TenderSafiContractDeploy = await TenderSafiContract.deploy();
    //await TenderSafi 
    await TenderSafiContractDeploy.deployed();
     //call contract tokens
     const TokenContract  = await ethers.getContractFactory("TenderSafiToken");

    //Deploy Token
    const TokenContractDeploy = await TokenContract.deploy(TenderSafiContractDeploy.address);
    //await Token Contract
    await TokenContractDeploy.deployed();
    //Console both Address
    console.log("TenderSafiAddress:",TenderSafiContractDeploy.address);
    console.log("TokenAddress:",TokenContractDeploy.address);
    
    //TenderSafiAddress: 0x8bBfE8395e299926369fCF03e63f4a254Bb16372
 ///TokenAddress: 0xe819B15A30D6784032824f0Cb6863C7b82Fc3d16
    
    
}
//main
main(()=>process.exit(0)).
catch((error)=>{
    console.error(error);
    process.exit(1);
})