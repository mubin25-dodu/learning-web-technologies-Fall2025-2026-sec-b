<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My form</title>
</head>
<body>
    <div class="container">
    <form action="../controlls/delete.php" method="post">
        <?php print_r($_GET); ?>
    <fieldset>
        <legend>Delete PRODUCTS</legend>
        Name : <input type="hidden" name="name" value="<?php echo $_GET['name']; ?>"><?php echo $_GET['name']; ?>
        <br>
        Buying price : <input type="hidden" name="BP" value="<?php echo $_GET['BP']; ?>"><?php echo $_GET['BP']; ?>
        <br>
        Selling price : <input type="hidden" name="SP" value="<?php echo $_GET['SP']; ?>"><?php echo $_GET['SP']; ?>
        <br>
        Display : YES
        <br>
        <br>
        <button type="submit" name="submit">Delete</button>
    </fieldset>
    </form>
    </div>
</body>
 <style>
        .container{
            width: 50%;
            margin: auto;
        }
    </style>
</html>