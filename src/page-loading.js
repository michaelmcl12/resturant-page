//Function to display main page
export const mainPage = () => {
    const contentContainer = document.querySelector(".contentContainer");

    //Create tag line
    let tagLine = document.createElement("h5");
    tagLine.textContent = "Voted the number one italian restaurant on the planet"
    contentContainer.appendChild(tagLine);

    //Create info
    let info = document.createElement("p");
    info.textContent = "Michael's Restaurant Italiano is a family run restaurant dating back to the early 1700s. We believe ein serving the highest quality food accompanied with only the finest wine";
    contentContainer.appendChild(info);
}