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
    //TenderSafiAddress: 0xFC494a1c6962C9060295F12038233AEb0793F183
    //TokenAddress: 0x8Db1749256e317e55F3C01050A9059D35Ff9a083
    
}
//main
main(()=>process.exit(0)).
catch((error)=>{
    console.error(error);
    process.exit(1);
})