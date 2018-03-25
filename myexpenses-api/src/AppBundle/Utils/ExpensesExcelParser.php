<?php

namespace AppBundle\Utils;

use AppBundle\Entity\Expense;
use AppBundle\Entity\User;
use Doctrine\ORM\EntityManager;

class ExpensesExcelParser
{
    /** @var  EntityManager $em */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function parseAndImportExpensesFromFile($uploadedFile, User $user)
    {
        /** @var \PHPExcel $fileObj */
        $fileObj = \PHPExcel_IOFactory::load($uploadedFile);

        $sheet = $fileObj->getActiveSheet();
        $sheetArray = $sheet->toArray();

        for ($row = 1; $row < count($sheetArray); $row++) {
            $expenseCategory = $this->em->getRepository("AppBundle:ExpenseCategory")->findOneById(trim($sheetArray[$row][3])) ?? null;
            $currency = $this->em->getRepository("AppBundle:Currency")->findOneByCode(trim(strtolower($sheetArray[$row][4]))) ?? null;
            $amount = trim($sheetArray[$row][1]);
            $description = trim($sheetArray[$row][2]);

            $expense = new Expense();
            $expense->setCreatedAt(\DateTime::createFromFormat("m-d-y", trim($sheetArray[$row][0])));
            $expense->setAmount($amount);
            $expense->setDescription($description);
            $expense->setExpenseCategory($expenseCategory);
            $expense->setCurrency($currency);
            $expense->setUser($user);
            $user->addExpense($expense);

            $this->em->persist($expense);
        }

        $this->em->flush();
        $this->em->clear();
    }
}