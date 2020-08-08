let drop = document.getElementById("dropdown")
let info = document.getElementById("infoDisplay")
let cord = document.getElementById("cord")
let x = document.getElementById("close")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("previous")
let xp = document.getElementById("experience")
let ed = document.getElementById("education")
let skills = document.getElementById("skills")


function show(id) {
    if(id == ""){
        x.style.display = "none"
        info.style.display = "none"

    } else {
        drop.style.animation = "extend ease-in 1s forwards"
        cord.style.animation = "extendCord ease-in 1s forwards"
        x.style.display = "block"
        info.style.display = "grid"
        info.style.animation = "turnOn 1s forwards"
        info.style.animationDelay = "1.25s"
        if(id == "resume"){
          nextBtn.style.display = "block"
            info.innerHTML = "<div class='personal'><h1 class='name'>Kyle <br>McDonald</h1> <p class='title'>- Full Stack Developer</p> <img class='resumeImg' src='images/me.jpg' alt='Picture of Kyle McDonald' ><ul class='contact'><h3>Contact</h3><li><i class='fas fa-phone-alt'></i>(360) 773-5095</li><li><i class='far fa-envelope'></i>kyjm2010@gmail.com</li><li><i class='fab fa-linkedin-in'></i><a href='https://www.linkedin.com/in/kyle-mcdonald-624a71183/'>LinkedIn Profile</a></li><li></ul></div><div id='experience' class='experience'><h1>Relevent Experience</h1><h4>Backrow Developement, Freelance Developer</h4><p>06/28-2020 – Current</p><p>Exercising various skills and languages to create web pages for customers as part of a team.</p><hr><h4>Immortal Wood Designs, Full Stack Developer</h4><p>05/25/2019 – Current</p><p>Design and implementation of a php based eCommerce webpage complete with admin dashboard that allows for dynamic CRUD capabilities for offered products. Implementation of PayPal API for checkout and review system for registered users. </p><hr><h4>Immortal Wood Designs, Full Stack Developer</h4><p>11/2019– 02/2020</p><p>Created an online presence and fully stocked storefront for Immortal Wood Designs using WordPress and WooCommerce</p></div><div id='education' class='education'><h1>Education</h1><h4>Clark College</h4><p>04/08/2020 - Current</p><p>On track to graduate with and Associates in web development. Earned numerous awards including an Oswald for “Outstanding Student in a Department” as well as seasonal Vice President’s List commendations. </p></div><div id='skills' class='programmingSkills'><h1 class='head'>Skills</h1><ul class='languages'><p>Programming</p> <li>HTML/CSS</li><li>JavaScript</li><li>Python</li><li>PHP</li><li>C#</li><li>MySQL</li></ul><ul class='design'><p>Design Tools</p><li>Figma</li><li>Adobe Photoshop</li><li>Sketchbook</li></ul><ul class='frameworks'><p>Frameworks</p><li>Laravel</li><li>React.js</li><li>Vue.js</li></ul><ul class='platforms'><p>Platforms</p><li>Git</li><li>WordPress</li></ul></div>"
        } else if(id == "html"){
            info.innerHTML = "<h1 class='title'>html</h1>"
        } else if(id == "php"){
             info.innerHTML = "<h1 class='title'>php</h1>"
        } else if(id == "laravel"){
             info.innerHTML = "<h1 class='title'>laravel</h1>"
        }  else if(id == "js"){
             info.innerHTML = "<h1 class='title'>js</h1>"
        }  else if(id == "css"){
             info.innerHTML = "<h1 class='title'>css</h1>"
        }   else if(id == "cap"){
             info.innerHTML = "<h1 class='title'>education</h1>"
        }  else if(id == "vp"){
             info.innerHTML = "<h1 class='title'>Vice Presidents</h1>"
        }  else if(id == "oswald"){
             info.innerHTML = "<h1 class='title'>Oswald</h1>"
        }  else if(id == "mta_fun"){
             info.innerHTML = "<h1 class='title'>mta fundamentals</h1>"
        }   else if(id == "mta_html"){
             info.innerHTML = "<h1 class='title'>Microsoft Technology Associate: HTML/CSS</h1>"
        }  else if(id == "mta_py"){
             info.innerHTML = "<h1 class='title'>mta python</H1>"
        }  else if(id == "mta_js"){
             info.innerHTML = "<h1 class='title'>mta javascript</h1>"
        }
    }
}

function exit() {
        x.style.display = "none"
        prevBtn.style.display = "none"
        info.innerHTML = ""
        nextBtn.style.display = "none"
        info.style.animation = "turnOff .15s"
        drop.style.animation = "retract ease-in 1s"
        cord.style.animation = "retractCord ease-in 1s"
}

function flip(){
     if(nextBtn.style.display == "none"){
          nextBtn.style.display = "block"
          prevBtn.style.display = "none"
          ed.style.display = "block"
          xp.style.display = "block"
          skills.style.display = "none"
     } else {
          nextBtn.style.display = "none"
          prevBtn.style.display = "block"
          ed.style.display = "none"
          xp.style.display = "none"
          skills.style.display = "grid"
          info.style.gridTemplateAreas = '"personal skills ." "personal skills ." "personal skills ." "personal skills ."'
     }
}

