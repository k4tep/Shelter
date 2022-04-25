const jsonObject = `
[
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }
  ]
`;

const pets = JSON.parse(jsonObject);
let activeSlide = -1;

const slide = (direction) => {
    const amountOfSlides = window.innerWidth > 1270 ? 3 : window.innerWidth < 759 ? 1 : 2;

    let counter = 1;

    activeSlide = (activeSlide + pets.length + (amountOfSlides * direction)) % pets.length;

    while(counter <= 3){
        const offset = (activeSlide + counter) % pets.length;
        document.getElementById(`${counter}-img`).src = pets[offset].img;
        document.getElementById(`${counter}-name`).innerHTML = pets[offset].name;
        counter++;
    }
}

const burgerClick = () => {

    const burgerMenu = document.getElementById('burg-menu');
    const burgerIcon = document.getElementById('burger');
    const burgerBlock = document.getElementById('back-burg');

    burgerMenu.classList.contains('open') ? burgerMenu.classList.remove('open') : burgerMenu.classList.add('open');
    if(!burgerMenu.classList.contains('start')){
        burgerMenu.classList.contains('close') ? burgerMenu.classList.remove('close') :  burgerMenu.classList.add('close');
    }

    if(burgerMenu.classList.contains('start')){
        burgerMenu.classList.remove('start');
    }
    document.getElementById('body').classList.toggle('overflow-hidden');
    burgerBlock.classList.toggle('hamburger-background');
    burgerIcon.classList.toggle('burger-rotate');
}

const openPopup = (counter) => {
    const offset = (activeSlide + counter) % pets.length;
    document.getElementById(`img-popup`).src = pets[offset].img;
    document.getElementById(`name-pet`).innerHTML = pets[offset].name;
    document.getElementById(`breed-pet`).innerHTML = pets[offset].type + " - " + pets[offset].breed;
    document.getElementById(`info-pet`).innerHTML = pets[offset].description;
    document.getElementById(`age-pet`).innerHTML = "<b>Age: </b>" + pets[offset].age;
    document.getElementById(`inoculations-pet`).innerHTML = "<b>Inoculations: </b>" + pets[offset].inoculations;
    document.getElementById(`diseases-pet`).innerHTML = "<b>Diseases: </b>" + pets[offset].diseases;
    document.getElementById(`parasites-pet`).innerHTML = "<b>Parasites: </b>" + pets[offset].parasites;
    document.getElementById('popup').classList.remove('popup-closed')
    document.getElementById('popup').classList.add('popup-open');
    document.getElementById('body').classList.add('overflow-hidden');
}

const closePopup = () => {
    document.getElementById('popup').classList.remove('popup-open');
    document.getElementById('popup').classList.add('popup-closed');
    document.getElementById('body').classList.remove('overflow-hidden');
}