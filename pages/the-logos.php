<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>logo</title>
  <style media="screen">
    body{
      background: linear-gradient(#2D2926,#2D2926),radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 75%);
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    img{
      width: 50%;
      padding: 1%;
      box-sizing: border-box;
    }
    @media screen and (max-width: 769px) {
        img{
          width: 100%;
        }
    }
  </style>
</head>
<body>
  <?php
  $files = glob('../svg/*.{svg}', GLOB_BRACE);
  foreach($files as $file) {
    echo '<img src="'.$file.'" alt="">';
  }
   ?>
</body>
</html>
