<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;


use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
use Zend\Config\Config;
use Application\Model\UsersModel;



class IndexController extends AbstractActionController
{

    public function indexAction()
    {
        return new ViewModel();
    }

    public function userlistAction()
    {
        require_once('data/users/users.php');
    
        return new ViewModel([
            'users' => $users
        ]);
    }

    public function userdetailAction() {
        require_once('data/users/users.php');
        $selectedUser = [];
        if($this->params('id')){
            foreach ($users as $user) {
                if($user['id'] === $this->params('id')){
                    $selectedUser = $user;
                }
            }
        }
        return new ViewModel([
            'user' => $selectedUser
        ]);
    }

}
