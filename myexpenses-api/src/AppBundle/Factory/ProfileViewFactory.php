<?php

namespace AppBundle\Factory;

use AppBundle\Entity\User;
use AppBundle\View\ProfileView;

class ProfileViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create(User $user): ProfileView
    {
        /** @var ProfileView $profileView */
        $profileView = new ProfileView();

        $profileView->id = $user->getId();
        $profileView->username = $user->getUsername();
        $profileView->email = $user->getEmail();
        $profileView->dailyLimit = $user->getDailyLimit();
        $profileView->monthlyLimit = $user->getMonthlyLimit();

        return $profileView;
    }
}
