<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use FOS\UserBundle\Model\User as BaseUser;

class User extends BaseUser
{
    protected $id;

    /** @var ArrayCollection  */
    private $expenses;

    /** @var DailyLimit $dailyLimit  */
    private $dailyLimit;

    /** @var MonthlyLimit $monthlyLimit  */
    private $monthlyLimit;

    public function __construct()
    {
        parent::__construct();
        $this->expenses = new ArrayCollection();
    }

    /**
     * @return DailyLimit
     */
    public function getDailyLimit()
    {
        return $this->dailyLimit;
    }

    /**
     * @param DailyLimit $dailyLimit
     */
    public function setDailyLimit($dailyLimit)
    {
        $this->dailyLimit = $dailyLimit;
    }

    /**
     * @return MonthlyLimit
     */
    public function getMonthlyLimit()
    {
        return $this->monthlyLimit;
    }

    /**
     * @param MonthlyLimit $monthlyLimit
     */
    public function setMonthlyLimit($monthlyLimit)
    {
        $this->monthlyLimit = $monthlyLimit;
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