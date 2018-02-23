<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use FOS\RestBundle\Controller\FOSRestController;

class ProfileController extends FOSRestController
{
    public function getProfileAction()
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $userView = $this->get('app.profile_view_factory')->create($user);
        $view = $this->view($userView, 200);

        return $this->handleView($view);
    }
}
