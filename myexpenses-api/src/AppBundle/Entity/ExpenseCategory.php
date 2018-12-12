<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;

/**
 * ExpenseCategory
 */
class ExpenseCategory
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /** @var ArrayCollection  */
    private $expenses;

    public function __construct()
    {
        $this->expenses = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return ExpenseCategory
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getExpenses()
    {
        return $this->expenses;
    }

    /**
     * @param Expense $expense
     * @return $this
     */
    public function addExpense(Expense $expense)
    {
        $this->expenses[] = $expense;

        return $this;
    }

    /**
     * @param Expense $expense
     */
    public function removeExpense(Expense $expense)
    {
        $this->expenses->removeElement($expense);
    }

    /**
     * @param Expense $expense
     * @return bool
     */
    public function hasExpense(Expense $expense)
    {
        return $this->expenses->contains($expense);
    }
}

