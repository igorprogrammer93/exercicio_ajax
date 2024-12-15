document.addEventListener("DOMContentLoaded", async () => {
    const username = "igorprogrammer93"; // Substitua pelo seu username do GitHub
    const apiUrl = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();

        // Atualizar os elementos da página
        document.getElementById("profile-avatar").src = data.avatar_url;
        document.getElementById("profile-name").textContent = data.name || "Usuário sem nome";
        document.getElementById("profile-username").textContent = `@${data.login}`;
        document.getElementById("repos-count").textContent = data.public_repos;
        document.getElementById("followers-count").textContent = data.followers;
        document.getElementById("following-count").textContent = data.following;
        document.getElementById("profile-link").href = data.html_url;
        document.getElementById("profile-link").textContent = "Ver no GitHub";
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        alert("Erro ao carregar os dados do GitHub. Verifique o nome de usuário.");
    }
});

    