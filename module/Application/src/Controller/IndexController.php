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
use Zend\Http\Request;


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

    public function postAction() {
        require_once('data/users/users.php');
        $response;
        if($this->getRequest()->isPost()) {
            $postData = $this->getRequest()->getPost()->toArray();
            // check if the user in the form post exists
            $postUser = $this->checkUser($postData['id'], $users);
            if ($postData['action'] === 'edit') {
                if ($postUser === false) {
                    $response = new JsonModel([
                        'status' => 'error',
                        'message' => 'The user could not be retrieved in the datafile.',
                        'data' => []
                    ]);
                } else {
                    $response = new JsonModel([
                        'status' => 'success',
                        'message' => 'The user has been edited succesfully',
                        'data'  => $postData
                    ]);
                }
            } else {             
                if ($postUser===true) {
                    $response = new JsonModel([
                        'status' => 'error',
                        'message' => 'The user already exists in the datafile. You cannot insert twice.',
                        'data' => []
                    ]);
                } else {
                    $postData['id'] = 'an-id-from-server-' . rand(1,100);
                    $response = new JsonModel([
                        'status' => 'success',
                        'message' => 'The user has been added succesfully',
                        'data'  => $postData
                    ]);
                }
            }
        }
        return $response;
    }

    private function checkUser($userId, $users){
        foreach($users as $user) {
            if($user['id'] === $userId){
                return true;
            }
        }
        return false;
    }

}
