const family = {
    godFather: "Don",
    familyName: "Corleone",
    youngestSon: "Michael",
};
const numberOfSons = 3;
const donsEpicPhrase = `I always knew that one day you the youngest of my ${numberOfSons} sons would be standing here in my place,`;
const desiredProperties = ["ruthless", "cunning", "strategic", "fair", "just"];

document.body.innerHTML = `
    <p>${family.youngestSon} came to the garden alone, as his father had requested. It was early in the morning, the air still and cool, and the garden was empty except for the old ${family.godFather} sitting in his wooden chair, his head bowed in prayer. ${family.youngestSon} took a seat opposite him, his eyes taking in the lush greenery and the sweet scent of the flowers.</p>
    <p>After a few moments, the ${family.godFather} looked up and smiled at his son. ${donsEpicPhrase} he said quietly. "And now it is time for you to take over, to be the new Godfather. You have my blessing, and my trust."</p>
    <p>${family.youngestSon} felt a surge of emotion at his father's words. He had always tried to distance himself from the family business, to forge his own path, but now he realized that he could not escape his destiny. He nodded solemnly, silently accepting his father's mantle.</p>
    <p>As he sat alone in his office, ${family.youngestSon} couldn't help but reflect on the choices he had made, the decisions that had led him to this point. He had always been the black sheep of the family, the one who wanted to be a respectable businessman instead of a criminal mastermind. But in the end, he had been forced to take over the family business, to protect his father and his brothers.</p>
    <p>Now, he was the new ${family.godFather}, the head of the <span class="accent">${family.familyName} family</span>, and he knew that his enemies would be coming for him. But he was ready. He had learned from his father's mistakes, and he would not make the same ones. He would be ${desiredProperties[0]}, ${desiredProperties[1]}, and ${desiredProperties[2]}, but he would also be ${desiredProperties[3]} and ${desiredProperties[4]}.</p>
`;
