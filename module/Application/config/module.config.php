<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Router\Http\Literal;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;
use Application\Controller\IndexController;
use Application\Controller\Factory\IndexControllerFactory;
use Application\Model\Factory\UserModelFactory;

return [
    'router' => [
        'routes' => [
            'home' => [
                'type'    => Literal::class,
                'options' => [
                    'route'    => '/',
                    'defaults' => [
                        'controller' => IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'application' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/application[/:action]',
                    'defaults' => [
                        'controller' => IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'userlist' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/userlist',
                    'defaults' => [
                        'controller' => IndexController::class,
                        'action'     => 'userlist',
                    ],
                ],
            ],
            'userdetail' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/userdetail[/:id]',
                    'defaults' => [
                        'controller' => IndexController::class,
                        'action'     => 'userdetail',
                    ],
                ],
            ],
            'post' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/post',
                    'defaults' => [
                        'controller' => IndexController::class,
                        'action'     => 'post',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            IndexController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => [
            'layout/layout'           => __DIR__ . '/../view/layout/layout.phtml',
            'application/index/index' => __DIR__ . '/../view/application/index/index.phtml',
            'error/404'               => __DIR__ . '/../view/error/404.phtml',
            'error/index'             => __DIR__ . '/../view/error/index.phtml',
        ],
        'template_path_stack' => [
            __DIR__ . '/../view',
        ],
        'strategies' => [
            'ViewJsonStrategy',
        ],
    ],
];
