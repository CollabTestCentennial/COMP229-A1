/*
File: app.js
Name: Stephen Kamino
StudentID: 822600292
Date: Oct 09 2020
*/
"use strict";

(function() {
    function Start()
    {
        console.log("App Started...");
        load_header('Intro');
        loadHome('Intro');
        loadFooter();
    }

    function load_header(title)
    {
        document.title = title;
        console.log(title);

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/twitHead.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("header")[0];
            html.innerHTML = XHR.responseText;

            let t1 = document.getElementById("title").innerHTML = title;

            let navLinks = document.getElementsByTagName("a");
            for(const link of navLinks){
                link.addEventListener("click", (event)=>{
                    event.preventDefault();
                    let id = link.getAttribute("id");
                    navigate(id);
                })
            }
        });

    }

    function loadFooter()
    {
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/footer.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("footer")[0];
            html.innerHTML = XHR.responseText;
        });
    }

    function navigate(goto){
        switch(goto)
        {
            case "intro":

                window.location.reload();
                break;
            case "about":
                window.location = "./about";
                break;
            case "projects":
                window.history.pushState("", "", "");
                loadProjects(goto);
                loadFooter();
                break;
            case "services":
                window.history.pushState("", "", "");
                loadServices(goto);
                loadFooter();
                break;
            case "contact":
                window.history.pushState("", "", "");
                loadContact(goto);
                loadFooter();
                break;
        }
    }
    function loadHome(goto)
    {
        console.log("loading home");
        document.title = goto;
        
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/intro.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadAbout(goto)
    {
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/about.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadProjects(goto)
    {
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/projects.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadServices(goto)
    {
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/services.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
    }
    function loadContact(goto)
    {
        document.title = goto;

        let XHR = new XMLHttpRequest();
        XHR.open("GET", "/partials/contact.ejs", true);
        XHR.send();
        XHR.addEventListener("readystatechange", function(){
            let html = document.getElementsByTagName("main")[0];
            html.innerHTML = XHR.responseText;
        });
        
    }
    window.addEventListener("load", Start, false);
})();