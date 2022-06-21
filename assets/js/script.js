window.onload = function () {
    let baseUrl = "https://api.github.com/users";
    // Se crea un div para cada sección: usuario y repos del usuario.
    const userDiv = document.createElement("div");
    const repoDiv = document.createElement("div");
}

    // Función utilitaria de request
    const request = async (url) => {
        const data = await fetch(url)
        const response = await data.json();
        // Alerta cuando no se encuentra usuario
        if (response.message == 'Not Found') {
            alert('Usuario no encontrado. Intenta con otro.');
        } else {
            return response
        }
    }

    const getUser = async (user) => {
        const url = `${baseUrl}/${user}`;
        return request(url);
    }

    const getRepo = async (user, page, reposQuantity) => {
        const url = `${baseUrl}/${user}/repos?page=${page}&per_page=${reposQuantity}`;
        return request(url);
    }
