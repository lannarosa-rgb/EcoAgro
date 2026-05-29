/* Configurações Gerais e Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary-color: #2e7d32; /* Verde Sustentável */
    --secondary-color: #81c784;
    --dark-color: #2c3e50;
    --light-color: #f4f9f4;
    --text-color: #444;
}

html {
    scroll-behavior: smooth;
}

body {
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}

.section-padding {
    padding: 60px 0;
}

.bg-light {
    background-color: var(--light-color);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: var(--primary-color);
}

.text-center {
    text-align: center;
}

/* Botões */
.btn {
    display: inline-block;
    background-color: var(--primary-color);
    color: #fff;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
}

.btn:hover {
    background-color: #1b5e20;
}

/* Cabeçalho */
header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--dark-color);
}

.logo span {
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 600;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
    height: 70vh;
    color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Grids e Cards */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 30px;
}

.card {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border-top: 5px solid var(--secondary-color);
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.card h3, .info-box h3 {
    margin-bottom: 15px;
    color: var(--dark-color);
}

.info-box {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    border-left: 5px solid var(--primary-color);
}

/* Simulador / Interatividade */
.simulador-box {
    margin-top: 30px;
    background: var(--light-color);
    padding: 40px;
    border-radius: 10px;
    display: inline-block;
    max-width: 500px;
    width: 100%;
}

.simulador-box input {
    padding: 12px;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
}

.resultado-style {
    margin-top: 25px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
}

/* Rodapé */
footer {
    background-color: var(--dark-color);
    color: #fff;
    text-align: center;
    padding: 20px 0;
    font-size: 0.9rem;
}

/* Responsividade Básica */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    nav ul {
        margin-top: 15px;
    }
    .hero h1 {
        font-size: 2.3rem;
    }
    .grid-2 {
        grid-template-columns: 1fr;
    }
}
