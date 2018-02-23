<?php

namespace AppBundle\Request;

use Symfony\Component\HttpFoundation\Request;

final class GetSingleExpenseRequest
{
    /**
     * @var string
     */
    private $expenseId;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->expenseId = $request->attributes->get('expenseId');
    }

    /**
     * @return string
     */
    public function getExpenseId()
    {
        return $this->expenseId;
    }
}
