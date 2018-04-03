let King = artifacts.require('./King.sol');

contract('King', async function ([deployer, userOne, userTwo, userThree]) {

    let king;

    beforeEach(async () => {
        king = await King.new({from: deployer});
    });

    //this should fail until the smart contract logic has been changed
    it("Take the throne with 1 Wei transaction", async() => {
        const txn = await king.takeThrone({value: 1});
        assert.equal(await king.king.call(), deployer, "King was not re-assigned");
    });
});