const menuBtn = document.querySelector("#btn-union");
const closeBtn = document.querySelector(".pop-up-close-btn");
const poUpMenu = document.querySelector(".mobile-menu-list");
poUpMenu.classList.add("disappear");
const menuIcon = document.querySelector(".menu-btn");
const headerSection = document.querySelector("#head-container");
const mainBody = document.querySelector("#header-body");
const mobileMenuList1 = document.querySelector(".for-clik-1");
const mobileMenuList2 = document.querySelector(".for-clik-2");
const mobileMenuList3 = document.querySelector(".for-clik-3");
const mobileMenuList4 = document.querySelector(".for-clik-4");
const mobileMenuList5 = document.querySelector(".for-clik-5");

const openMenu = () => {
  poUpMenu.classList.remove("disappear");
  menuIcon.classList.add("disappear");
  headerSection.classList.add("blur");
  mainBody.classList.add("blur");
};

const closeMenu = () => {
  poUpMenu.classList.add("disappear");
  menuIcon.classList.remove("disappear");
  headerSection.classList.remove("blur");
  mainBody.classList.remove("blur");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
mobileMenuList1.addEventListener("click", closeMenu);
mobileMenuList2.addEventListener("click", closeMenu);
mobileMenuList3.addEventListener("click", closeMenu);
mobileMenuList4.addEventListener("click", closeMenu);
mobileMenuList5.addEventListener("click", closeMenu);

/*/ speaker section*/
const speaker = [
  {
    id: 1,
    name: "yohai benkler",
    title: "professor at Harvard Law School",
    image: "./images/speaker_01.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    id: 2,
    name: "Jeon Gil-nam",
    title: "Korea Advanced Institute of Science and Technology (KAIST)",
    image: "./images/speaker_02.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    id: 3,
    name: "Noh So-young",
    title: "Art Center Nabi Director, CC Korea Director",
    image: "./images/speaker_03.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    id: 4,
    name: "Julia Leda",
    title: "Head of the Young Pirates of Europe",
    image: "./images/speaker_04.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    id: 5,
    name: "Layla Tretikov",
    title: "Secretary General of the Wikimedia Foundation",
    image: "./images/speaker_05.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
  {
    id: 6,
    name: "Ryan Merkley",
    title: "Creative Commons CEO, Former Mozilla Foundation COO",
    image: "./images/speaker_06.png",
    desc: "Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.",
  },
];
const speak = document.querySelector(".speakrs");
const speechTitle = document.createElement("h3");
speechTitle.innerHTML = "Main Speakers";
speechTitle.className = "Main-h3";
speak.append(speechTitle);
const lineBreaker = document.createElement("hr");
lineBreaker.className = "speakers-hr";
speak.append(lineBreaker);
const allSpeaker = document.createElement("div");
allSpeaker.className = "containerallspeaker";
speak.append(allSpeaker);

const speakersBuild = (start, end) => {
  for (let i = start; i < end; i += 1) {
    const phoneNumber = document.createElement("div");
    phoneNumber.className = "conatinerspeaker";
    allSpeaker.appendChild(phoneNumber);
    const imgSpeaker = document.createElement("img");
    imgSpeaker.setAttribute("src", speaker[i].image);
    imgSpeaker.className = "speakerphoto";
    phoneNumber.append(imgSpeaker);
    const itemList = document.createElement("ul");
    itemList.className = "info";
    phoneNumber.append(itemList);
    const liItem = document.createElement("li");
    liItem.innerHTML = speaker[i].name;
    itemList.append(liItem);
    const liTitle = document.createElement("li");
    liTitle.innerHTML = speaker[i].title;
    itemList.append(liTitle);
    const liDesc = document.createElement("li");
    liDesc.innerHTML = speaker[i].desc;
    itemList.append(liDesc);
  }
};

const desktopQuery = window.matchMedia("(min-width: 768px)");

if (desktopQuery.matches) {
  speakersBuild(0, speaker.length);
} else {
  speakersBuild(0, 2);
  const seeAllSpeakers = document.createElement("button");
  seeAllSpeakers.id = "moreBtn";
  seeAllSpeakers.classList.add("all-speakers");
  seeAllSpeakers.innerText = "More";
  speak.append(seeAllSpeakers);
  seeAllSpeakers.addEventListener("click", () => {
    speakersBuild(2, speaker.length);
    seeAllSpeakers.classList.add("remove");
  });
}
