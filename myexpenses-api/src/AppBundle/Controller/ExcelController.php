<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Request\FileUploadRequest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ExcelController extends FOSRestController
{
    public function uploadAction(Request $request)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $fileUploadRequest = new FileUploadRequest($request);
        $validationResults = $this->get('validator')->validate($fileUploadRequest);

        if (0 !== count($validationResults)) {
            $validationErrorViewFactory = $this->get('app.validation_error_view_factory');

            return $this->view($validationErrorViewFactory->create($validationResults), Response::HTTP_BAD_REQUEST);
        }

        $this->get("app.expenses_excel_parser")->parseAndImportExpensesFromFile($fileUploadRequest->getUploadedFile(), $user);

        $view = $this->view(null, Response::HTTP_NO_CONTENT);

        return $this->handleView($view);
    }
}
