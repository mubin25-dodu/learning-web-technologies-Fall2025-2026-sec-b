    <?php
    $length= 20;
    $width= 10;
    echo"the area of the rectangle is ".($length * $width);
    echo"<br>";
    echo"the perimeer of the rectangle is ". (2*($length+$width));

     $vat =0.15;
     $amount= 10000;
    echo"<br>";
    echo"vat of 10000 is " .($vat*$amount);

    $number= 21;
    echo"<br>";

    if($number%2==0){
        echo"{$number} is an even number";
    }else{ 
        echo"{$number} is an odd number";
    }

$n1 = 5;
$n2 = 1;
$n3 = 57;
    echo"<br>";

if ($n1 > $n2 && $n1 > $n3) {
    echo "large num {$n1}";
} elseif ($n2 > $n1 && $n2 > $n3) {
    echo "large num {$n2}";
} else {
    echo "large num {$n3}";
}
    echo"<br>";

for($n=10; $n<101; $n++){
  if($n%2==0){
    echo"{$n},";
    }
}

$arr=[2,4,51,4,6];
    echo"<br>";

for($i=0; $i<5; $i++)
{
if($arr[$i]===51){
    echo"51 found a index {$i}";
}
}
    echo"<br>";
    $c=1;
for($i=0; $i<3; $i++)
{
for($j=0; $j<$c; $j++)
{
     echo"*";
   

}
  $c++;
   echo"<br>";
}


    ?>
