<?php

    session_start();
    /*
    echo '<pre>';
    print_r($_SESSION);
    echo '</pre>';

    //remover índices do array de sessão
    //unset()

    unset($_SESSION['x']); //para remover o indice apenas se o mesmo existir
    
    echo '<pre>';
    print_r($_SESSION);
    echo '</pre>';
    
    //destruir a variável de sessão
    //session_destroy()
    */
    session_destroy();//será destruida
    //forçar um redirecionamento
    header('Location: index.php')
    
?>