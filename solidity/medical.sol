pragma solidity >= 0.6.1;
contract medical {

    struct users
    {
        bytes32 name;
        bool isSick;
        bool initialized;
        bool feelsSick;
        bool isDoctor;
        bool verified;
        address trustedDoctor;
    }

    address public owner;

    modifier onlyOwner()
    {
        require(msg.sender == owner);
        _;
    }

    modifier onlyVerifiedDoctors() {
        require(UserStore[msg.sender].verified && UserStore[msg.sender].isDoctor, "not a verified doctor");
        _;
    }

    mapping(address => users) public UserStore;

    constructor() public
    {
        owner = msg.sender;
    }

      function setIsSick (bool _isSick, address _sickPatient) public onlyVerifiedDoctors
    {
       require(UserStore[_sickPatient].trustedDoctor == msg.sender, "not a trusted doctor");
       UserStore[_sickPatient].isSick = _isSick;
    }

     function verifyMedical (address _Doctor) public onlyOwner
    {
       UserStore[_Doctor].isDoctor = true;
    }

     function registerUser(bytes32 _name, bool _isDoctor, address _trustedDoctor) public
    {
       UserStore[msg.sender] = users(_name, false, true, false, _isDoctor, false, _trustedDoctor);
    }

   function isInitialized() public view returns (bool initialized)
    {
        return UserStore[msg.sender].initialized;
    }

    function setFeelsSick(bool _feelsSick) public
    {
       UserStore[msg.sender].feelsSick = _feelsSick;
    }

    function setTrustedDoctor(address _trustedDoctor) public
    {
       UserStore[msg.sender].trustedDoctor = _trustedDoctor;
    }

    function close() public onlyOwner
    {
    //onlyOwner is custom modifier, "owner" is the owners address
        selfdestruct(payable(owner));
    }

   function getIsSick() public view returns (bool isSick)
    {
        return UserStore[msg.sender].isSick;
    }

    function getIsDoctor() public view returns (bool isDoctor)
    {
        return UserStore[msg.sender].isDoctor;
    }

    function getName() public view returns (bytes32)
    {
        return UserStore[msg.sender].name;
    }

    function getTrustedDoctor() public view returns (bytes32)
    {
        return UserStore[UserStore[msg.sender].trustedDoctor].name;
    }

    function getFeelsSick() public view returns (bool feelsSick)
    {
        return UserStore[msg.sender].feelsSick;
    }

    function isVerified() public view returns (bool verified)
    {
        return UserStore[msg.sender].verified;
    }
}
