function getPercentage(){
    percentages = document.querySelectorAll("h2.percentage");
    percentages.forEach(elemento => {
        var valPercentage = elemento.innerHTML;
        console.log(valPercentage);
        elemento.previousElementSibling.firstChild.style.width = valPercentage;
      });
    };
    
    getPercentage();