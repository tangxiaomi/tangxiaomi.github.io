
<?php
header('Content-Type: application/json');
//现在是想获取前一天的时间，加载不同返回的天数不一样，每次都会减一
$day=$_GET['day'];//中括号

$date=date('Y-m-d',strtotime($day.'day'));

$url='https://moment.douban.com/api/stream/date/'.$date.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    $data = file_get_contents($url);

	$data=json_decode($data,true);//转换成数组

	$data=json_encode(array('result'=>$data,'day'=>--$day));//转换成json字符串

	echo $data;
?>