// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ChainHire {
    struct WorkExperience {
        string company;
        string role;
        uint256 start;
        uint256 end;
    }
    

    mapping(address => WorkExperience[]) public workExperiences;
    mapping(address => bool) public consent;

    function addWorkExperience(string memory company, string memory role, uint256 start, uint256 end) public {
        workExperiences[msg.sender].push(WorkExperience(company, role, start, end));
    }
     function setConsent(bool value) public {
        consent[msg.sender] = value;
    }

    function getWorkExperience(address candidate) public view returns (WorkExperience[] memory) {
        require(consent[candidate], "Candidate must provide consent to retrieve work experience data");
        return workExperiences[candidate];
    }
}
