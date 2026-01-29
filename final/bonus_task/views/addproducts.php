<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My form</title>
</head>
<body>
    <div class="container">
    <form action="../controlls/add.php" method="post">
    <fieldset>
        <legend>ADD PRODUCTS</legend>
        Name <br>
        <input type="text" id="name" name="name">
        <br>
        Buying price <br>
        <input type="text" id="BP" name="BP">
        <br>
        Selling price <br>
        <input type="text" id="SP" name="SP">
        <br>
        <input type="checkbox" id="cb" name="cb"> Display data
        <br>
        <br>
        <button type="submit" name="submit">Save</button>
    </fieldset>
    </form>
    <br>
    <br>
    <fieldset >
        <legend>Display</legend>
        <table border="1" style="min-width: none; width:100%;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Profit</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <?php
            // fetching data\ 
            require_once "../model/db.php";
            $products = read("SELECT * ,(selling_price-buying_price) as profit FROM `product` where display ='yes';");
            foreach($products as $product){
            ?>
            <tbody>
                <tr>
                    <td><?php echo $product['name']; ?></td>
                    <td><?php echo $product['profit']; ?></td>
                    <td>
                        <a href="edit.php?name=<?php echo $product['name']; ?>&BP=<?php echo $product['buying_price']; ?>&SP=<?php echo $product['selling_price']; ?>" style="margin-right: 10px;">Edit</a>
                        <a href="delete.php?name=<?php echo $product['name']; ?> &BP=<?php echo $product['buying_price']; ?>&SP=<?php echo $product['selling_price']; ?>">Delete</a>
                    </td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
       <a href="ajax_page.php">go to ajax implemented page</a>
    </fieldset>
    </div>
    <style>
        .container{
            width: 50%;
            margin: auto;
        }
    </style>

</body>
</html>