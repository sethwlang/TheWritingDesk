<?php

ini_set('display_errors',1);
error_reporting(E_ALL);
header('content-type: text/plain');

$secret = '14ec86def9a778bc286c32607dd36c4f94fb2729279e9c7a5b70f409ff266ad1';

#check headers
if(!isset($_SERVER['HTTP_X_GITHUB_EVENT']) || !isset($_SERVER['HTTP_X_GITHUB_DELIVERY']) || !isset($_SERVER['HTTP_X_HUB_SIGNATURE'])){
    header($_SERVER['SERVER_PROTOCOL'].' 400 Bad Request', true, 400);
    die();
}

#validate data
$data = file_get_contents("php://input");
if('sha1='.hash_hmac('sha1', $data, $secret) != $_SERVER['HTTP_X_HUB_SIGNATURE']){
    header($_SERVER['SERVER_PROTOCOL'].' 401 Unauthorized', true, 401);
    die();
}

#legit
$data = json_decode($data);
$gitDir = realpath('../');
$host = $_SERVER['HTTP_HOST'] ?? '';
$isDev = $host === 'localhost';#todo update when we have a proper staging site
if(isset($data->ref)){
    if(
        ($data->ref == 'refs/heads/dev' && $isDev)
        || ($data->ref == 'refs/heads/master' && !$isDev)
    ){
        #do a git pull to update files
        `git -C $gitDir pull`;
    }
} else {
    echo "Missing ref or env file...oops?\n";
}

echo "All done\n";
