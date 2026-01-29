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
        <?php print_r($_GET); ?>
    <fieldset>
        <legend>Edit PRODUCTS</legend>
        Name <br>
        <input type="text" id="name" name="name" value="<?php echo $_GET['name']; ?>">
        <br>
        Buying price <br>
        <input type="text" id="BP" name="BP" value="<?php echo $_GET['BP']; ?>">
        <br>
        Selling price <br>
        <input type="text" id="SP" name="SP" value="<?php echo $_GET['SP']; ?>">
        <br>
        <input type="checkbox" id="cb" name="cb" checked> Display data
        <br>
        <br>
        <input type="text" style="display:none;" name="original_name" value="<?php echo $_GET['name']?>">
        <button type="submit" name="submit">Save</button>

    </fieldset>
    </form>
`    </div>
</body>
 <style>
        .container{
            width: 50%;
            margin: auto;
        }
    </style>
</html>