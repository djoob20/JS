var startMesssage = "Vôtre catégorie:", 
    endMessage,
    adult = confirm("Êtes vous adult?") ;

endmessage = adult ? "18+": "-18";
alert(startMesssage + endmessage);