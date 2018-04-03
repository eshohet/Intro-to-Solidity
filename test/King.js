let King = artifacts.require('./King.sol');

contract('King', async function ([deployer, userOne, userTwo, userThree]) {

    let king;

    beforeEach(async () => {
        king = await King.new({from: deployer});
    });

    //Let's start off by ensuring that the user sends ether
    it("If ether is not sent, reject the transaction.", async() => {
        const txn = await king.takeThrone();
    });
});