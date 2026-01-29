<?php
require_once '../model/db.php';
$data = json_decode(file_get_contents('php://input'), true);
// echo json_encode($data);

if(isset($data['action'])){
    if($data['action'] === 'fetch_products'){
        $products = read("SELECT * ,(selling_price-buying_price) as profit FROM `product` where display ='yes';");
        echo json_encode($products);
    }
    else {
        $search_term = $data['action'];
        $products = read("SELECT * ,(selling_price-buying_price) as profit FROM `product` where display ='yes' AND name LIKE '%$search_term%';");
        echo json_encode($products);
    }
}

?>