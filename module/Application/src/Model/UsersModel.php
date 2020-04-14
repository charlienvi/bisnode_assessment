<?php

namespace Application\Model;

require_once('../../../data/users/users.php');

class UsersModel {

    protected $users;

    public function __construct($config)
    {
        $this->users = $users;
    }
    
    public function getUserData() {
        return $this->users;
    }


}