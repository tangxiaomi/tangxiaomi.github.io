<?php
header('Content-Type: application/json');

$recUrl='https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


$allUrl='https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


$rec=file_get_contents($recUrl);
$all=file_get_contents($allUrl);

//���Ǳ�����飬���������������ԭ����json�ַ���

$rec = json_decode($rec, true);  //�Ǻ�ܲ��ǵ�
$all = json_decode($all, true);

//����������ϲ���һ��  ����������������
$data=json_encode(array('rec'=>$rec,'all'=>$all));//ת����json�ַ���

echo $data;
?>