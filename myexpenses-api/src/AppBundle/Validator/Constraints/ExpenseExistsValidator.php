<?php

namespace AppBundle\Validator\Constraints;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ExpenseExistsValidator extends ConstraintValidator
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function validate($expenseId, Constraint $constraint)
    {
        $expense = $this->em->getRepository('AppBundle:Expense')->findOneById($expenseId);

        if ($expense) {
            return;
        }

        $this->context->addViolation($constraint->message);
    }
}