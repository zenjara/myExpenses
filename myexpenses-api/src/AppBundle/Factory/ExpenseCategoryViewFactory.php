<?php

namespace AppBundle\Factory;

use AppBundle\Entity\ExpenseCategory;
use AppBundle\View\ExpenseCategoryView;

class ExpenseCategoryViewFactory
{
    /**
     * {@inheritdoc}
     */
    public function create(ExpenseCategory $expenseCategory): ExpenseCategoryView
    {
        /** @var ExpenseCategoryView $expenseCategoryView */
        $expenseCategoryView = new ExpenseCategoryView();

        $expenseCategoryView->id = $expenseCategory->getId();
        $expenseCategoryView->name = $expenseCategory->getName();

        return $expenseCategoryView;
    }
}
