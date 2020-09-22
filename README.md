# Truffle Cheat Sheet
Bootcamp 2020 / Categories / Day 4 / Deploying our First Contract
<br>
<li>create folder
<li>in CMD in that folder type "truffle init"
<li>go to editor
<li>create contract under the CONTRACTS folder
<li>go back to CMD and use "truffle compile"
<li>the result is displayed under the folder build/contracts
<br>
<li>now create the migration files under the folder migrations<br>
Reihenfolge: Start with 1_ then 2_...use names under build<br>
<br>
Open Ganache and link the contracts (Settings, Add Project). If done correctly they will appear under CONTRACTS<br>
<br>
# To deploy:<br>
<br>in CMD type "truffle migrate"<br>
<br>
in CMD type "truffle console"<br>
<br>
before new deployment: migrate <br>
before next deployment: migrate --reset<br>
<br>
To interact with the contract: in CMD type truffle console<br>
Examples:<br>
<li>var instance = await Birdcontract.deployed()
<li>instance.name()
