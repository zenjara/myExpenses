<?php

namespace AppBundle\Validator\Constraints;

use Doctrine\ORM\EntityManager;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class CurrencyExistsValidator extends ConstraintValidator
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function validate($currencyId, Constraint $constraint)
    {
        $currency = $this->em->getRepository('AppBundle:Currency')->findOneById($currencyId);

        if ($currency){
            return;
        }

        $this->context->addViolation($constraint->message);
    }
}