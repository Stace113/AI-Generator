function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Hello",
        autoStart: true,
        delay: 75,
        cursor: "",
    });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generatePoem);
