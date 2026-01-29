<?php
require_once "../model/db.php";
// print_r($_POST);
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $query = "DELETE FROM product WHERE name='$name' and buying_price='{$_POST['BP']}' and selling_price='{$_POST['SP']}'";
    if(write($query)){
        echo "Product deleted successfully.";
        header("Location: ../views/addproducts.php");
    } else {
        echo "Error deleting product: " . mysqli_error($con);
    }
}
?>