<?php

namespace AppBundle\Validator\Constraints;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ExpenseCategoryExistsValidator extends ConstraintValidator
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function validate($expenseCategoryId, Constraint $constraint)
    {
        $expenseCategory = $this->em->getRepository('AppBundle:ExpenseCategory')->findOneById($expenseCategoryId);

        if ($expenseCategory) {
            return;
        }

        $this->context->addViolation($constraint->message);
    }
}