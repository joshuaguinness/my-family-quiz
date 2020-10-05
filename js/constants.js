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
    {"question": "What is your sister Dorthy?", "type": "image", "answer": people[7].image,
    "option1": people[2].image, "option2": people[7].image, "option3": people[4].image},
    {"question": "What is your youngest neice?", "type": "image", "answer": people[4].image,
    "option1": people[8].image, "option2": people[5].image, "option3": people[4].image},
    {"question": "What is your relationship to Joshua", "type": "no-image", "answer": people[3].relationship,
    "option1": people[3].relationship, "option2": people[2].relationship, "option3": people[6].relationship}
];