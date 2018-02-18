<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class ProfileController extends FOSRestController
{
    public function getProfileAction()
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

//        $data = [];
//
//        $expenses = $user->getExpenses();
//        foreach ($expenses as $expense){
//            $data[]= $this->get('app.expense_view_factory')->create($expense);
//        }
        $view = $this->view($user, 200);

        return $this->handleView($view);
    }
}
