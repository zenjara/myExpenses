<?php

namespace AppBundle\Request;

use Symfony\Component\HttpFoundation\Request;

final class FileUploadRequest
{
    private $uploadedFile;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->uploadedFile = $request->files->get('file');
    }

    /**
     * @return mixed
     */
    public function getUploadedFile()
    {
        return $this->uploadedFile;
    }
}
