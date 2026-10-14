fetch("data/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Projects could not be loaded.");
        }

        return response.json();
    })
    .then(projects => {

        const projectList = document.getElementById("project-list");

        projectList.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("div");

            card.className = "project-card";

            card.innerHTML = `
                <img src="images/${project.screenshot}"
                     alt="${project.title} screenshot">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <p>
                    <strong>Technologies:</strong>
                    ${project.technologies}
                </p>

                <p>
                    <strong>Role:</strong>
                    ${project.role}
                </p>

                <a href="${project.link}" target="_blank">
                    View Project
                </a>
            `;

            projectList.appendChild(card);
        });
    })
    .catch(error => {

        document.getElementById("project-list").innerHTML =
            "<p>Unable to load projects. Please try again later.</p>";

        console.error(error);
    });






const githubUsername = "YOUR_GITHUB_USERNAME";

const githubURL =
    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=5`;

fetch(githubURL)
    .then(response => {

        if (!response.ok) {
            throw new Error("GitHub data could not be loaded.");
        }

        return response.json();
    })
    .then(repositories => {

        const githubList =
            document.getElementById("github-list");

        githubList.innerHTML = "";

        repositories.forEach(repo => {

            const card = document.createElement("div");

            card.className = "github-card";

            card.innerHTML = `
                <h3>
                    <a href="${repo.html_url}" target="_blank">
                        ${repo.name}
                    </a>
                </h3>

                <p>
                    Main Language:
                    ${repo.language || "Not specified"}
                </p>
            `;

            githubList.appendChild(card);
        });
    })
    .catch(error => {

        document.getElementById("github-list").innerHTML =
            "<p>GitHub repositories are currently unavailable.</p>";

        console.error(error);
    });




const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("form-message");


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


  
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted.";


    contactForm.reset();
});



const backToTop =
    document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }
});


backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
