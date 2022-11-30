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
    
    
}
//main
main(()=>process.exit(0)).
catch((error)=>{
    console.error(error);
    process.exit(1);
})