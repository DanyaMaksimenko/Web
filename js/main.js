class Model
 {

    constructor() {}

    results(check, z1, z2, z3, z4, z5, z6, z7, z8) 
    {
        let correctAnswer = 0;
        if (z1 === '' || z2 === '' || z3 === '' || z4 === '' || z5 === '' || z6 === '' || z7 === '' || z8 === '') check.innerHTML = "You should to translate all this words!";
        else {

          if (z1 === "Questionnaire" || z1 === "questionnaire") correctAnswer++; 
          if (z2 === "Stewardship" || z2 === "stewardship") correctAnswer++;
          if (z3 === "Inquiry" || z3 === "inquiry") correctAnswer++;
          if (z4 === "Alternative" || z4 === "alternative") correctAnswer++;
          if (z5 === "Accolade" || z5 === "accolade") correctAnswer++; 
          if (z6 === "Worksheet" || z6 === "worksheet") correctAnswer++;
          if (z7 === "Sequence" || z7 === "sequence") correctAnswer++; 
          if (z8 === "Degree" || z8 === "degree") correctAnswer++;

          if (correctAnswer > 6) check.innerHTML = "Your result is " + correctAnswer + "/8. well done!"
          else check.innerHTML = "You result is " + correctAnswer + "/8. try better!"
        }
    
        check.style.display = "block";
    
    }
}

class View 
{

    constructor() {}

    plusSlides(n)
     {
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("carousel-item");
          
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
          
            slides[slideIndex-1].style.display = "block";
        }
        showSlides(slideIndex += n);
    }

    proverit()
     {
        var check = document.getElementById("rezultat");
        var z1 = document.getElementById('z_1').value;
        var z2 = document.getElementById('z_2').value;
        var z3 = document.getElementById('z_3').value;
        var z4 = document.getElementById('z_4').value;
        var z5 = document.getElementById('z_5').value;
        var z6 = document.getElementById('z_6').value;
        var z7 = document.getElementById('z_7').value;
        var z8 = document.getElementById('z_8').value;

        var myModel = new Model();
        myModel.results(check, z1, z2, z3, z4, z5, z6, z7, z8);
    }

}
  
class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
}

let slideIndex = 1;
const app = new Controller(new Model(), new View())