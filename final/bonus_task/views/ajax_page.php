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
        <input type="text" name="search" id="search" placeholder="search by name"> <button id="searchBtn">Search</button>
        <table border="1" style="min-width: none; width:100%;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Profit</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- will load products here using js -->
            </tbody>
        </table>
    </fieldset>
    </div>
    <style>
        .container{
            width: 50%;
            margin: auto;
        }
    </style>
    <script src="ajax.js"></script>
</body>
</html>