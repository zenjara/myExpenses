<?php

namespace AppBundle\Factory;

use AppBundle\Entity\Currency;
use AppBundle\View\CurrencyView;

class CurrencyViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create(Currency $currency): CurrencyView
    {
        /** @var CurrencyView $currencyView */
        $currencyView = new CurrencyView();

        $currencyView->id = $currency->getId();
        $currencyView->name = $currency->getName();
        $currencyView->code = $currency->getCode();

        return $currencyView;
    }
}
