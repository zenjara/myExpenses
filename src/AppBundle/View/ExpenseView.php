<?php

declare(strict_types=1);

namespace AppBundle\View;

class ExpenseView
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var int
     */
    public $amount;

    /**
     * @var string
     */
    public $description;

    /**
     * @var string
     */
    public $createdAt;

    /**
     * @var string
     */
    public $updatedAt;

    /**
     * @var string
     */
    public $expenseCategory;

    /**
     * @var string
     */
    public $currency;
}
