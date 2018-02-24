<?php

namespace AppBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class ExpenseExists extends Constraint
{
    public $message = "Expense with provided ID does not exist.";

    public function validatedBy()
    {
        return 'app.validator.expense_exists';
    }

    public function getTargets()
    {
        return self::PROPERTY_CONSTRAINT;
    }
}