pragma solidity ^0.5.12;

import "./IERC721.sol";

contract Birdcontract is IERC721{

    string public constant name = "Academy Birds";
    string public constant symbol = "BRD";

    struct Bird {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Bird[] birdies;

    mapping (uint256 => address) public birdIndexToOwner;
    mapping (address => uint256) ownershipTokenCount;

    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

    function totalSupply() public view returns (uint) {
        return birdies.length;
    }

    function ownerOf(uint256 _tokenId) external view returns (address) {
        return birdIndexToOwner[_tokenId];
    }

    function transfer(address _to, uint256 _tokenId) external {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));
        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;
        birdIndexToOwner[_tokenId] = _to;
        if (_from != address(0)) {
            ownershipTokenCount[_from]--;
            delete birdIndexToApproved[_tokenId];
        }
        emit Transfer(_from, _to, _tokenId);
    }

   function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return birdIndexToOwner[_tokenId] == _claimant;
    }
}
