pragma solidity ^0.5.12;

import "./Ownable.sol";
import "./IERC721.sol";

// Kitty = Bird, kitten = birdb, kitties = birdies

contract Birdcontract is IERC721, Ownable {

    string public constant name = "Academy Birds";
    string public constant symbol = "BRD";

    uint256 public gen0Counter;
    uint256 public constant gen0Countermax = 10;

    event Birth(address owner, uint256 birdId, uint256 mumId, uint256 dadId, uint256 genes);

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

    function getBird(uint256 _id) public view returns (
        uint256 genes,
        uint256 birthTime,
        uint256 mumId,
        uint256 dadId,
        uint256 generation,
        address owner
    ) {
        Bird storage bird = birdies[_id];  // use storage as Bird is a pointer. Memory instead would take too much memory
        birthTime = uint256(bird.birthTime);
        mumId = uint256(bird.mumId);
        dadId = uint256(bird.dadId);
        generation = uint256(bird.generation);
        genes = bird.genes;
    }


// creat gen 0. It ha no owner. Owner is the contract
    function createBirdGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require(gen0Counter < gen0Countermax); // after that we need to start breeding
        gen0Counter++;
        return _createBird(0, 0, 0, _genes, msg.sender);
    }    

// create bird
    function _createBird(uint256 _mumId, uint256 _dadId, uint256 _generation, uint256 _genes, address _owner) private returns (uint256){
        Bird memory _bird = Bird({
            genes: _genes,
            birthTime: uint64(now),  // unix time
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });
        uint256 newBirdbId = birdies.push(_bird) -1; // ID 0 for the first Bird
        emit Birth(_owner, newBirdbId, _mumId, _dadId, _genes); // new Birth log
         _transfer(address(0), _owner, newBirdbId); // transfer to new owner
        return newBirdbId;
    }



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
        }
        emit Transfer(_from, _to, _tokenId);
    }

   function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return birdIndexToOwner[_tokenId] == _claimant;
    }
}
