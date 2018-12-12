<?php

namespace AppBundle\Factory;

use AppBundle\View\LimitView;

class LimitViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create($limit): LimitView
    {
        /** @var LimitView $limitView */
        $limitView = new LimitView();

        $limitView->amount = $limit->getAmount();
        $limitView->currency =
            [
                "id" => $limit->getCurrency()->getId(),
                "code" => $limit->getCurrency()->getCode()
            ];

        return $limitView;
    }
}