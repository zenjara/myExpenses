<?php

namespace AppBundle\Request;

use Symfony\Component\HttpFoundation\Request;

final class NewExpenseRequest
{
    /**
     * @var string
     */
    private $amount;

    /**
     * @var string
     */
    private $description;

    /**
     * @var string
     */
    private $expenseCategoryId;

    /**
     * @var string
     */
    private $currencyId;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->amount = $request->request->get('amount');
        $this->expenseCategoryId = $request->request->get('expenseCategoryId');
        $this->description = $request->request->get('description');
        $this->currencyId = $request->request->get('currencyId');
    }

    /**
     * @return string
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return string
     */
    public function getExpenseCategoryId()
    {
        return $this->expenseCategoryId;
    }

    /**
     * @return string
     */
    public function getCurrencyId()
    {
        return $this->currencyId;
    }
}
