<?php

namespace AppBundle\Factory;

use AppBundle\View\ValidationErrorView;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class ValidationErrorViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create(ConstraintViolationListInterface $validationResults): ValidationErrorView
    {
        /** @var ValidationErrorView $errorMessage */
        $errorMessage = new ValidationErrorView();

        $errorMessage->code = Response::HTTP_BAD_REQUEST;
        $errorMessage->message = 'Validation failed';
        /** @var ConstraintViolationInterface $result */
        foreach ($validationResults as $result) {
            $errorMessage->errors[$result->getPropertyPath()][] = $result->getMessage();
        }

        return $errorMessage;
    }
}