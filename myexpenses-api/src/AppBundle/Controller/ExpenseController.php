<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Expense;
use AppBundle\Entity\User;
use AppBundle\Request\GetSingleExpenseRequest;
use AppBundle\Request\NewExpenseRequest;
use AppBundle\Utils\PaginatorDetails;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ExpenseController extends FOSRestController
{
    public function indexAction(Request $request)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $pageView = $this->get('app.expense_catalog_view_factory')
            ->listAllExpensesPaginated(
                $user,
                new PaginatorDetails($request->attributes->get('_route'), $request->query->all()),
                $request->query->get('sorting')
            );

        $view = $this->view($pageView, 200);

        return $this->handleView($view);
    }

    public function newAction(Request $request)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $newExpenseRequest = new NewExpenseRequest($request);
        $validationResults = $this->get('validator')->validate($newExpenseRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $expense = $this->handleNewExpense($newExpenseRequest, $user);
        $expenseView = $this->get('app.expense_view_factory')->create($expense);
        $view = $this->view($expenseView, Response::HTTP_CREATED);

        return $this->handleView($view);

    }

    public function showAction(Request $request)
    {
        $getSingleExpenseRequest = new GetSingleExpenseRequest($request);
        $validationResults = $this->get('validator')->validate($getSingleExpenseRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $expense = $this->handleShowExpense($getSingleExpenseRequest);
        $expenseView = $this->get('app.expense_view_factory')->create($expense);
        $view = $this->view($expenseView, Response::HTTP_OK);

        return $this->handleView($view);
    }

    public function removeAction(Request $request)
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $getSingleExpenseRequest = new GetSingleExpenseRequest($request);
        $validationResults = $this->get('validator')->validate($getSingleExpenseRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $view = $this->view($this->handleRemoveExpense($getSingleExpenseRequest, $user), Response::HTTP_NO_CONTENT);

        return $this->handleView($view);
    }

    private function handleNewExpense(NewExpenseRequest $newExpenseRequest, $user)
    {
        $expenseCategory = $this->getDoctrine()->getRepository('AppBundle:ExpenseCategory')->findOneById($newExpenseRequest->getExpenseCategoryId());
        $currency = $this->getDoctrine()->getRepository('AppBundle:Currency')->findOneById($newExpenseRequest->getCurrencyId());

        $expense = new Expense();
        $expense->setUser($user);
        $expense->setAmount($newExpenseRequest->getAmount());
        $expense->setDescription($newExpenseRequest->getDescription());
        $expense->setExpenseCategory($expenseCategory);
        $expense->setCurrency($currency);

        $user->addExpense($expense);
        $this->getDoctrine()->getRepository("AppBundle:Expense")->add($expense);

        return $expense;
    }

    private function handleShowExpense($getSingleExpenseRequest)
    {
        return $this->getDoctrine()->getRepository('AppBundle:Expense')->findOneById($getSingleExpenseRequest->getExpenseId());
    }

    private function handleRemoveExpense($getSingleExpenseRequest, $user)
    {
        $expense = $this->getDoctrine()->getRepository('AppBundle:Expense')->findOneById($getSingleExpenseRequest->getExpenseId());
        $user->removeExpense($expense);

        $this->getDoctrine()->getRepository('AppBundle:Expense')->remove($expense);

        return null;
    }
}
