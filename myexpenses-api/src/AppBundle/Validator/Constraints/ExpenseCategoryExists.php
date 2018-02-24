<?php

namespace AppBundle\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class ExpenseCategoryExists extends Constraint
{
    public $message = "Expense category with provided ID does not exist.";

    public function validatedBy()
    {
        return 'app.validator.expense_category_exists';
    }

    public function getTargets()
    {
        return self::PROPERTY_CONSTRAINT;
    }
}