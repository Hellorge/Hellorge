<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" type="image/ico" href="/images/fav.ico">
  <title>logo</title>
  <style media="screen">
    body{
      background: linear-gradient(#2D2926,#2D2926),radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 75%);
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    svg{
      width: 48%;
      margin: 1%;
      box-sizing: border-box;
    }
    @media screen and (max-width: 769px) {
        svg{
          width: 98%;
        }
    }
  </style>
</head>
<body>
  <?php
  $files = glob('../svg/*.{svg}', GLOB_BRACE);
  foreach($files as $file) {
    echo file_get_contents($file);
  }
   ?>
</body>
</html>
