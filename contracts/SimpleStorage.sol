// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract SimpleStorage {
    string public data;

    event DidSetData(string data);

    function setData(string calldata data_) external {
        data = data_;
        emit DidSetData(data);
    }
}
