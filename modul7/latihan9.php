<html>
    <head>
        <title> Mencetak String </title>
    </head>
    <body>
        <?php
        define("PI", 3.14);
        $radius = 100;
        $luas_lingkaran = PI * ($radius * $radius  );
        $keliling_lingkaran = 2 * PI * $radius;
        echo "Luas lingkaran : ".$luas_lingkaran;
        echo "<br />";
        echo "Keliling lingkaran : ".$keliling_lingkaran;
        ?>
</html>