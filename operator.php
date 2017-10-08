<?php
echo("Processing... ");

if(isset($_POST['records'])) {
    echo "records = \n" . $_POST['records'];
    $decoded = json_decode($_POST['records']);
    echo "\ndecoded: \n" . $decoded;
}
else {
    echo "isn't set";
}