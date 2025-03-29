
// ---------- theme-switch ----------//

const themeSwitch = document.getElementById("theme-switch");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

const theme = localStorage.getItem("theme");
document.body.setAttribute("data-theme", theme);

themeSwitch.addEventListener("click", () => {

    const body = document.body;

    if (body.getAttribute("data-theme") == "dark") {
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    }
})

// ---------- Carousel ----------//

// array of objects with each user ans its avatar, name and testimony.
const users = [
    { src: "avatar.png", name: "Ichigo Kurosaki" , text:"I have Been solving all the project ideas on roadmap.sh and I am surprised how far I have come from where I started."},
    { src: "avatar2.png", name: "Orchid", text:"Since starting my career in 2021, I have only followed one resource, roadmap.sh, it truly helped me go from 0 to having a job and changing the fincancial trajectory of my family"},
    { src: "avatar3.png", name: "Patrick Bateman", text:"I find myself recommending roadmap.sh to all the internees of junior developers. It's a great way to skill up and grow in your career." }
];

// add the central the text of the central user in the starting position of the slider 
document.getElementById("text").textContent = users[1].text;

// remove the first item in the array and add it to the end, then call the function to update the slider
function nextSlide() {
    users.push(users.shift());
    updateSlider();
}

// remove the last item in the array and add it to the beggining, then call the function to update the slider
function prevSlide() {
    users.unshift(users.pop());
    updateSlider();
}

//update the content of the slider (name, text and the position of each avatar)
function updateSlider() {
    document.getElementById("left").src = users[0].src;
    document.getElementById("center").src = users[1].src;
    document.getElementById("right").src = users[2].src;
    document.getElementById("name").textContent = users[1].name;
    document.getElementById("text").textContent = users[1].text;
}