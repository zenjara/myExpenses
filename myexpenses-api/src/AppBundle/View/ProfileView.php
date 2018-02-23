<?php

declare(strict_types=1);

namespace AppBundle\View;

class ProfileView
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $username;

    /**
     * @var string
     */
    public $email;

    /**
     * @var float
     */
    public $dailyLimit;

    /**
     * @var float
     */
    public $monthlyLimit;
}
