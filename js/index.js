const people = [
    {"name": "Jim", "relationship": "brother", "image": "photos/brother.jpg"},
    {"name": "Sophia", "relationship": "daughter", "image": "photos/daughter.jpg"},
    {"name": "Mark", "relationship": "grandchild", "image": "photos/grandchild1.jpg"},
    {"name": "Joshua", "relationship": "grandchild", "image": "photos/grandchild2.jpg"},
    {"name": "Susan", "relationship": "neice", "image": "photos/neice1.jpg"},
    {"name": "Karen", "relationship": "neice", "image": "photos/neice2.jpg"},
    {"name": "Terry", "relationship": "nephew", "image": "photos/nephew.jpg"},
    {"name": "Dorthy", "relationship": "sister", "image": "photos/sister.jpg"},
    {"name": "Nigel", "relationship": "son", "image": "photos/son.jpg"}
];

const questions = [
    {"question": "Who is the brother of Dorthy?", "type": "no-image", "answer": people[0].name, 
    "option1": people[0].name, "option2": people[1].name, "option3": people[6].name},
    {"question": "Which picture is your grandson Mark?", "type": "image", "answer": people[2].image,
    "option1": people[0].image, "option2": people[2].image, "option3": people[5].image},
    {"question": "What is your relationship to Nigel?", "type": "no-image", "answer": people[8].relationship,
    "option1": people[1].relationship, "option2": people[4].relationship, "option3": people[8].relationship},
    {"question": "Who is your sister Dorthy?", "type": "image", "answer": people[7].image,
    "option1": people[2].image, "option2": people[7].image, "option3": people[4].image},
    {"question": "Who is your youngest neice?", "type": "image", "answer": people[4].image,
    "option1": people[8].image, "option2": people[5].image, "option3": people[4].image},
    {"question": "What is your relationship to Joshua", "type": "no-image", "answer": people[3].relationship,
    "option1": people[3].relationship, "option2": people[2].relationship, "option3": people[6].relationship},
    {"question": "Who is your daughter Sophia?", "type": "image", "answer": people[1].image,
    "option1": people[1].image, "option2": people[4].image, "option3": people[6].image},
    {"question": "Which picture is your grandchild Joshua?", "type": "image", "answer": people[3].image,
    "option1": people[0].image, "option2": people[3].image, "option3": people[7].image},  
];

function populateQuesAndAns(questionNumber)
{
    document.getElementById("question").innerHTML = questions[questionNumber].question;

    if (questions[questionNumber].type === "image"){
        document.getElementById("option1").value = questions[questionNumber].option1;
        document.getElementById("option1-label").innerHTML = "First Image";
        document.getElementById("image1").src = questions[questionNumber].option1;
        document.getElementById("image1").hidden = false;

        document.getElementById("option2").value = questions[questionNumber].option2;
        document.getElementById("option2-label").innerHTML = "Second Image";
        document.getElementById("image2").src = questions[questionNumber].option2;
        document.getElementById("image2").hidden = false;

        document.getElementById("option3").value = questions[questionNumber].option3;
        document.getElementById("option3-label").innerHTML = "Third Image";
        document.getElementById("image3").src = questions[questionNumber].option3;
        document.getElementById("image3").hidden = false;

    } else {
        document.getElementById("option1").value = questions[questionNumber].option1;
        document.getElementById("option1-label").innerHTML = questions[questionNumber].option1;
        document.getElementById("option2").value = questions[questionNumber].option2;
        document.getElementById("option2-label").innerHTML = questions[questionNumber].option2;
        document.getElementById("option3").value = questions[questionNumber].option3;
        document.getElementById("option3-label").innerHTML = questions[questionNumber].option3;
    }
}

function hideImages()
{
    document.getElementById("image1").hidden = true;
    document.getElementById("image2").hidden = true;
    document.getElementById("image3").hidden = true;
}

function checkButtonAction()
{
    const radiobuttons = document.querySelectorAll('input[name="answer"]');

    // https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    let selectedValue;
    for (const rb of radiobuttons) {
        if (rb.checked) {
            selectedValue = rb.value;
                break;
        }
    }
    checkAnswer(selectedValue);
}

function checkAnswer(selectedValue)
{
    if (selectedValue === questions[questionNumber].answer)
    {
        document.getElementById("feedback").innerHTML = "Correct. Your next question is shown.";
        document.getElementById("feedback").style = "color:green";
        // Following line of code inspired by:
        // https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
        document.querySelector('input[name="answer"]:checked').checked = false;
        hideImages();

        questionNumber = (questionNumber + 1) % questions.length;
        populateQuesAndAns(questionNumber);
    } else {
        document.getElementById("feedback").innerHTML = "Incorrect. Please try again.";
        document.getElementById("feedback").style = "color:red";
    }
}

function restartQuizAction()
{
    questionNumber = 0;
    populateQuesAndAns(questionNumber);
    hideImages();
    // Following line of code inspired by:
    // https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
    document.querySelector('input[name="answer"]:checked').checked = false;
}

var questionNumber = 0;
populateQuesAndAns(questionNumber);

document.getElementById("restart-button").addEventListener('click', restartQuizAction);
document.getElementById("check-button").addEventListener('click', checkButtonAction);

