# Truffle CHeat Sheet
Bootcamp 2020 / Categories / Day 4 / Deploying our First Contract
<br>
<li>create folder
<li>in CMD in that folder type "truffle init"
<li>go to editor
<li>create contract under the CONTRACTS folder
<li>go back to CMD and use "truffle compile"
<li>the result is displaied under the folder build/contracts
<br>
<<li>>now create migration files under the folder migrations
Reihenfolge: Start with 1_ then 2_...use names under build
<br>
Open Ganache and link the contracts (under CONTRACTS)
<br>
in CMD type "truffle migrate"
<br>
in CMD "truffle console"
<br>
before new deployment: migrate <br>
before next deployment: migrate --reset

