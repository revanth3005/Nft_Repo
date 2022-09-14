pragma solidity ^0.8.0;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract Nsrn_NFT is ERC721{
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol){}

    mapping(uint => string)private _tokenUri;//creating the Token Uri nothing but token url's

    modifier isTokenExist(uint tokenId){
        require(_exists(tokenId),"ERC721 error: TokenID not found");//_exist is a method from ERC721 used to check the tokenId
        _;
    }

    function _setTokenUri(string memory tokenUri, uint tokenId)internal isTokenExist(tokenId){
        _tokenUri[tokenId]=tokenUri;
    }
    function mint(address recipient, uint tokenId, string memory tokenUri )public{
        _mint(recipient, tokenId);//creates nft
        _setTokenUri(tokenUri, tokenId);//updates metadata of nft
    }
    function tokenURI(uint tokenId) public view virtual override isTokenExist(tokenId) returns(string memory){
        return _tokenUri[tokenId];
    }// it is a function in ERC721 overriding the exist function by using the virtual and override keywords so here we are passing the 
    //modifier as isTokenExist and we are passing to check the token Id 

}
