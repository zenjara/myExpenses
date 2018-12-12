<?php

namespace AppBundle\Factory;

use AppBundle\Entity\Expense;
use AppBundle\View\ExpenseView;

class ExpenseViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create(Expense $expense): ExpenseView
    {
        /** @var ExpenseView $expenseView */
        $expenseView = new ExpenseView();

        $expenseView->id = $expense->getId();
        $expenseView->expenseCategory =
            [
                "id"=>$expense->getExpenseCategory()->getId(),
                "name"=>$expense->getExpenseCategory()->getName()
            ];
        $expenseView->amount = $expense->getAmount();
        $expenseView->description = $expense->getDescription();
        $expenseView->createdAt = $expense->getCreatedAt();
        $expenseView->updatedAt = $expense->getUpdatedAt();
        $expenseView->currency =
            [
                "id" => $expense->getCurrency()->getId(),
                "code" => $expense->getCurrency()->getCode()
            ];

        return $expenseView;
    }
}