<?php

    $dsn = 'mysql:host=localhost;dbname=website;charset=utf8mb4';

    $pdo = new PDO($dsn, 'root', '');

    if ( isset($_POST['upload']) ) 
    {
        
        $file = file_get_contents($_FILES['image']['tmp_name']);
        $filename = explode('.', $_FILES['image']['name']);
        $extension = strtolower(end( $filename ));
        if ( !in_array($extension, ['gif', 'jpeg', 'jpg', 'png']) ) 
        {
            header('Location: index.php?err=invalid_extension');
            return;    
        }
        if ( !empty($file) ) 
        {
            
            $sql = " INSERT INTO images(name) VALUES (:name) "; // The type of column "name" is "longblob" and it is very important to make it so.
            $pdo->prepare($sql)->execute( array('name' => base64_encode($file)) );

        }
        
    }

?>
<!DOCTYPE html>
<html onmouseout="">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Awesome Website</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">
</head>
<body>	

    <div class="container">
        
        <form class="image-upload" id="ImageUploadForm" action="#" method="POST" enctype="multipart/form-data">
            <h1 class="iu-title">Upload and Retrieve Images from Database as Binary</h1>
            <ul class="iu-inputs">
                <li>
                    <label for="image">Image file:</label>    
                    <input type="file" name="image" id="ImageInput">
                </li>
                <li>
                    <input type="submit" name="upload" value="Upload">
                </li>
            </ul>
        </form>
        <div class="images" id="Images">
            
            <?php  
         
                $sql = " SELECT * FROM images ";
                $result = $pdo->query($sql);

                if ( $result->rowCount() > 0 ) 
                {
                    
                    while ( $row = $result->fetch() ) 
                    {
                    
                        echo '<img src="data:image/jpg;charset=utf-8;base64,' .$row['name']. '" alt="Binary Image"/>';

                    }

                }  
                
            ?>

        </div>  

    </div>
    
</body>
</html>