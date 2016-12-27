<?php
header('Content-Type: application/json');

$recUrl='https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


$allUrl='https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


$rec=file_get_contents($recUrl);
$all=file_get_contents($allUrl);

//先是变成数组，请求回来的数据是原本是json字符串

$rec = json_decode($rec, true);  //是横杠不是点
$all = json_decode($all, true);

//将两个数组合并在一起  对象里有两个数组
$data=json_encode(array('rec'=>$rec,'all'=>$all));//转换成json字符串

echo $data;
?>