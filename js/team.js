const teamMembers = [
    {username: "leonardobarrosdev", elementId: "member1"},
    {username: "KaueAlvesPO", elementId: "member3"}
]
async function fetchProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
        return null;
    }
}
window.addEventListener("DOMContentLoaded", async () => {
    for (const member of teamMembers) {
        const profile = await fetchProfile(member.username);
        if (profile) {
            const memberElement = document.getElementById(member.elementId);
            memberElement.querySelector("img").src = profile.avatar_url || "img/profile.png";
            memberElement.querySelector("img").alt = `Imagem do rosto de ${profile.name || profile.login}`;
            memberElement.querySelector("h4").textContent = profile.name || profile.login;
            memberElement.querySelector("p").textContent = profile.bio || "Sem descrição";
            const socialLinks = memberElement.querySelectorAll(".btn-social");
            socialLinks[0].href = `https://instagram.com/${profile.login}`;
            socialLinks[1].href = `https://www.facebook.com/${profile.login}`;
            socialLinks[2].href = `https://www.linkedin.com/in/${profile.login}`;
        }
    }
});