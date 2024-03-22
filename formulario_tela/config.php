<?php


$dbHost = 'Localhost';
$dbUsername = 'tellabitt';
$dbPassword = '';
$dbName = 'celia_penco';

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName)

if($conexao->connect_errno)
{
echo "Erro";
}
else
{
echo "Conexão efetuada com sucesso";
}

?>