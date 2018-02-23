<?php

declare(strict_types=1);

namespace AppBundle\View;

class ValidationErrorView
{
    /**
     * @var int
     */
    public $code;

    /**
     * @var string
     */
    public $message;

    /**
     * @var array
     */
    public $errors = [];
}
