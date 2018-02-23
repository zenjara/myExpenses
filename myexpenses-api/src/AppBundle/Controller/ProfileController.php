<?php

namespace AppBundle\Controller;

use AppBundle\Entity\DailyLimit;
use AppBundle\Entity\MonthlyLimit;
use AppBundle\Entity\User;
use AppBundle\Request\SetLimitRequest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends FOSRestController
{
    public function getProfileAction()
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $userView = $this->get('app.profile_view_factory')->create($user);
        $view = $this->view($userView, 200);

        return $this->handleView($view);
    }

    public function setDailyLimitAction(Request $request)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $setLimitRequest = new SetLimitRequest($request);
        $validationResults = $this->get('validator')->validate($setLimitRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $dailyLimit = $this->handleSetDailyLimit($setLimitRequest, $user);
        $user->setDailyLimit($dailyLimit);

        $this->getDoctrine()->getManager()->persist($user);
        $this->getDoctrine()->getManager()->flush();

        $view = $this->view(null, Response::HTTP_NO_CONTENT);

        return $this->handleView($view);
    }

    public function setMonthlyLimitAction(Request $request)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $setLimitRequest = new SetLimitRequest($request);
        $validationResults = $this->get('validator')->validate($setLimitRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $monthlyLimit = $this->handleSetMonthlyLimit($setLimitRequest, $user);
        $user->setMonthlyLimit($monthlyLimit);

        $this->getDoctrine()->getManager()->persist($user);
        $this->getDoctrine()->getManager()->flush();

        $view = $this->view(null, Response::HTTP_NO_CONTENT);

        return $this->handleView($view);
    }

    private function handleSetDailyLimit($setLimitRequest, User $user)
    {
        $currency = $this->getDoctrine()->getRepository('AppBundle:Currency')->findOneById($setLimitRequest->getCurrencyId());

        if (!$user->getDailyLimit()) {
            $dailyLimit = new DailyLimit();
        } else {
            $dailyLimit = $user->getDailyLimit();
        }
        $dailyLimit->setAmount($setLimitRequest->getAmount());
        $dailyLimit->setCurrency($currency);

        return $dailyLimit;
    }

    private function handleSetMonthlyLimit($setLimitRequest, User $user)
    {
        $currency = $this->getDoctrine()->getRepository('AppBundle:Currency')->findOneById($setLimitRequest->getCurrencyId());

        if (!$user->getMonthlyLimit()) {
            $monthlyLimit = new MonthlyLimit();
        } else {
            $monthlyLimit = $user->getMonthlyLimit();
        }
        $monthlyLimit->setAmount($setLimitRequest->getAmount());
        $monthlyLimit->setCurrency($currency);

        return $monthlyLimit;
    }
}
