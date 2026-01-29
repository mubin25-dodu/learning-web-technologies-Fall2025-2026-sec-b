<?php
require_once "../model/db.php";
// print_r($_POST);
$product_name;
$buying_price;
$selling_price;

if(isset($_POST['submit'])){
    $product_name = trim($_POST['name'] );
    $buying_price = trim($_POST['BP'] );
    $selling_price = trim($_POST['SP'] );
    $errors = [];

    // Validating inp
    if ($product_name === '') {
        $errors[] = "Product name is required.";
    }
    if ($buying_price === '' || !is_numeric($buying_price) || $buying_price < 0) {
        $errors[] = "Buying price must be a non-negative number.";
    }
    if ($selling_price === '' || !is_numeric($selling_price) || $selling_price < 0) {
        $errors[] = "Selling price must be a non-negative number.";
    }
    if (is_numeric($buying_price) && is_numeric($selling_price) && $selling_price < $buying_price) {
        $errors[] = "Selling price should not be less than buying price.";
    }

    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    } else {

        $query = "INSERT INTO product VALUES ('$product_name', '$buying_price', '$selling_price', 'no')";
        if(isset($_POST['cb'])){
            $query = "INSERT INTO product VALUES ('$product_name', '$buying_price', '$selling_price', 'yes')";
        }
        if(isset($_POST['original_name'])){
            $original_name = trim($_POST['original_name']);
            $query = "UPDATE product SET name='$product_name', buying_price='$buying_price', selling_price='$selling_price', display='yes' WHERE name='$original_name'";
        }
        if(write($query)){
            echo "Product added successfully.";
            header("Location: ../views/addproducts.php");
        } else {
            echo "Error adding product: " . mysqli_error($con);
        }
    }
}
?>