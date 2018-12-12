<?php

namespace AppBundle\Factory;

use AppBundle\Entity\User;
use AppBundle\Utils\PaginatorDetails;
use Doctrine\ORM\EntityManager;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;

class ExpenseCatalogViewFactory
{
    /** @var EntityManager */
    private $em;

    /** @var ExpenseViewFactory */
    private $expenseViewFactory;

    /** @var PageViewFactory */
    private $pageViewFactory;

    public function __construct(
        EntityManager $em,
        ExpenseViewFactory $expenseViewFactory,
        PageViewFactory $pageViewFactory
    )
    {
        $this->em = $em;
        $this->expenseViewFactory = $expenseViewFactory;
        $this->pageViewFactory = $pageViewFactory;
    }

    public function listAllExpensesPaginated(User $user, paginatorDetails $paginatorDetails, $sorting)
    {
        $qb = $this->em->getRepository("AppBundle:Expense")->findAllByUserQueryBuilder($user, $sorting);

        $pagerfanta = new Pagerfanta(new DoctrineORMAdapter($qb));
        $pagerfanta->setMaxPerPage($paginatorDetails->limit());
        $pagerfanta->setCurrentPage($paginatorDetails->page());

        $pageView = $this->pageViewFactory->create($pagerfanta, $paginatorDetails->route(), $paginatorDetails->parameters());

        foreach ($pagerfanta->getCurrentPageResults() as $result) {
            $pageView->items[] = $this->expenseViewFactory->create($result);
        }

        return $pageView;
    }
}