pragma solidity ^0.4.15;

/**
    King of the Kill
    The person who has sent the most ether holds the title to be King
*/

contract King {

    /**
        Variables global to the contract go here
        The king is currently initialized to the 0x000... address
    */
    address public king = 0x0;

    /**
        This is the constructor, it is only ran once when the contract is deployed
        Let's make the deployer of the contract the first king
    */
    function King() public {

    }

    /**
        This is the default function, which is called when no data is sent to the contract
    */
    function () payable public {
        takeThrone();
    }

    /**
        This is the main function that is either called directly, or indirectly through the default function
        Here you'll check to see if the amount sent is > the maximum amount ever sent (you'll need a new variable for that)
        If it's greater, than the sender is now the new king
    */
    function takeThrone() payable public {

    }
}