<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class CurrencyController extends FOSRestController
{
    public function getCurrenciesAction()
    {
        $data = [];
        $currencies = $this->getDoctrine()->getRepository("AppBundle:Currency")->findAll();

        foreach ($currencies as $currency) {
            $data[] = $this->get('app.currency_view_factory')->create($currency);
        }
        $view = $this->view($data, Response::HTTP_OK);

        return $this->handleView($view);
    }
}