<?php

namespace AppBundle\Request;

use Symfony\Component\HttpFoundation\Request;

final class SetLimitRequest
{
    /**
     * @var float
     */
    private $amount;

    /**
     * @var string
     */
    private $currencyId;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->amount = (float)$request->request->get('amount');
        $this->currencyId = $request->request->get('currencyId');
    }

    /**
     * @return float
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * @return string
     */
    public function getCurrencyId()
    {
        return $this->currencyId;
    }
}
