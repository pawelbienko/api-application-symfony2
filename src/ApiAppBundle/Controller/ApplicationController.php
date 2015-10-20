<?php

namespace ApiAppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Lsw\ApiCallerBundle\Call\HttpGetJson;


class ApplicationController extends Controller
{
    public function indexAction()
    {
        return $this->render('ApiAppBundle:Application:index.html.twig', array());
    }
    
    public function searchAction()
    {
        return $this->render('ApiAppBundle:Application:search.html.twig', array());
    }
    
    public function searchApiAction()
    {
        $output = $this->get('api_caller')->call(
            new HttpGetJson(
                $url = 'localhost/rest-api-symfony2/web/app_dev.php/api/locations',
                array('CURLOPT_HEADER' => 'true') ));
        return new Response(json_encode($output));
    }
}
