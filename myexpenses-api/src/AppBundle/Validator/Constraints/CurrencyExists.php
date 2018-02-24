<?php

namespace AppBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class CurrencyExists extends Constraint
{
    public $message = "Currency with provided ID does not exist.";

    public function validatedBy()
    {
        return 'app.validator.currency_exists';
    }

    public function getTargets()
    {
        return self::PROPERTY_CONSTRAINT;
    }
}