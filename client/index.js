var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x9a68187BF8748a25E45C6d487586c755E2A66925"; //address of deployed contract (truffle migrate)

$(document).ready(function(){  // to check that page loaded
    // to enable to use MetaMask 
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];
        
        console.log(instance);
        // listner for the Birth event
        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let birdId = event.returnValues.birdId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#birdCreation").css("display", "block");     //birdCreation is in index,html as ab alert
            $("#birdCreation").text("owner:" + owner
                                    + "birdId:" + birdId
                                    + "mumId:" + mumId
                                    + "dadId:" + dadId
                                    + "genes:" + genes)
        })
        .on('error', console.error);
    })
})


function createBird(){    //createBird comes from index.html
    var dnaStr = getDna();
    instance.methods.createBirdGen0(dnaStr).send({}, function(error, txHash){
        if(error)
            console.log(error);
        else 
            console.log(txHash);
        
    })
}
