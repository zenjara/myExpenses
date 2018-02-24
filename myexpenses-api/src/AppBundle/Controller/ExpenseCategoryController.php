<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class ExpenseCategoryController extends FOSRestController
{
    public function getExpenseCategoriesAction()
    {
        $data = [];
        $expenseCategories = $this->getDoctrine()->getRepository("AppBundle:ExpenseCategory")->findAll();

        foreach ($expenseCategories as $expenseCategory) {
            $data[] = $this->get('app.expense_category_view_factory')->create($expenseCategory);
        }
        $view = $this->view($data, Response::HTTP_OK);

        return $this->handleView($view);
    }
}