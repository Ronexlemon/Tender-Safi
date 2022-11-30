// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./TenderOwner.sol";

contract Bider is Ownable, TenderPoster {
    using SafeMath for uint;
    //include Rejected Status
    IERC20 tendersafiTokens;
    uint constTendasafiTokenAmount = 5;
    uint constApprovedAmount = 100 ether;
    uint constChargePerPost = 0.001 ether;

    uint constApprovedTenderSafitoken = 100;

    enum statuschoices {
        Waiting,
        Approved,
        Rejected
    }

    struct biderDetails {
        address payable bidowner;
        string companyName;
        string contact;
        string goodsDealsWith;
        string tenderOwnerName;
        uint bidsTenderIndex;
        statuschoices choice;
        string goodsDescription;
    }
    mapping(uint => biderDetails) bidItems;
    uint bidstenderlength = 0;

    function activateTenderSafiTokens(
        address _tenderSafiTokens
    ) public onlyOwner {
        tendersafiTokens = IERC20(_tenderSafiTokens);
    }

    //fix this
    function writeBiderDetails(
        uint _tenderIndex,
        string memory _companyName,
        string memory _contact,
        string memory _goodsDealsWith
    ) public {
        require(
            tendersafiTokens.balanceOf(msg.sender) >= 5,
            "Please Recharge your Tendersafitokens"
        );
        //require to bid onlyonce

        require(
            tendersafiTokens.transferFrom(msg.sender, address(this), 5),
            "unable to transfer TSD tokens"
        );
        require(
            msg.sender != bidItems[_tenderIndex].bidowner,
            "Can Only Bid Once"
        );
        uint _bidsindex = bidstenderlength;

        bidItems[_tenderIndex] = biderDetails(
            payable(msg.sender),
            _companyName,
            _contact,
            _goodsDealsWith,
            tenderItems[_tenderIndex].companyName,
            _bidsindex,
            statuschoices.Waiting,
            tenderItems[_tenderIndex].tenderDescription
        );
        bidstenderlength = bidstenderlength.add(1);
        //status
        //choice = statuschoices.Waiting;
    }

    function readBiderDetails()
        public
        view
        returns (biderDetails[] memory props)
    {
        props = new biderDetails[](tenderIndex); //size array
        for (uint256 index = 0; index < tenderIndex; index++) {
            props[index] = bidItems[index];
        }
    }

    function getTotalBindsLength() public view returns (uint) {
        return bidstenderlength;
    }

    //Approve function
    function approveTender(
        uint _tenderbidsIndex
    )
        public
        onlyOwner
        returns (address, string memory, string memory, string memory)
    {
        require(
            msg.sender == tenderItems[_tenderbidsIndex].owner,
            "Only The Owner can Approve"
        );
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Waiting,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        bidItems[_tenderbidsIndex].choice = statuschoices.Approved;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }

    //DisplayOnlyApproved Tenders
    function onlyApproveTender(
        uint _tenderbidsIndex
    )
        public
        view
        returns (address, string memory, string memory, string memory)
    {
        //require(msg.sender != address(this),"Only The Owner can Approve");
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Approved,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        //bidItems[_tenderbidsIndex].choice = statuschoices.Approved;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }

    //Rejected Tenders
    //added
    function rejectTender(
        uint _tenderbidsIndex
    )
        public
        onlyOwner
        returns (address, string memory, string memory, string memory)
    {
        require(
            msg.sender == tenderItems[_tenderbidsIndex].owner,
            "Only The Owner can Approve"
        );
        require(
            bidItems[_tenderbidsIndex].choice == statuschoices.Waiting,
            "Waitng Aproval"
        );
        // choice = statuschoices.Approved;
        bidItems[_tenderbidsIndex].choice = statuschoices.Rejected;
        return (
            bidItems[_tenderbidsIndex].bidowner,
            bidItems[_tenderbidsIndex].companyName,
            bidItems[_tenderbidsIndex].contact,
            bidItems[_tenderbidsIndex].goodsDealsWith
        );
    }

    function buyTenderSafiTokens() external payable {
        require(msg.sender.balance >= 0.01 ether, "less balance");
        payable(address(this)).call{value: msg.value};
        tendersafiTokens.transfer(
            payable(msg.sender),
            constTendasafiTokenAmount
        );
    }

    function senderBalance() public view returns (uint256) {
        return tendersafiTokens.balanceOf(msg.sender);
    }

    function approves() external {
        tendersafiTokens.approve(address(this), constApprovedAmount);
    }

    function getconstTendersafiamount() public view returns (uint) {
        return constApprovedTenderSafitoken;
    }

    function changeconstTendersafiamount(uint amount) public {
        constTendasafiTokenAmount = amount;
    }

    function getconstApprovedAmount() public view returns (uint) {
        return constApprovedAmount;
    }

    function getconstChargePerPost() public view returns (uint) {
        return constChargePerPost;
    }

    receive() external payable {}

    fallback() external payable {}
}
