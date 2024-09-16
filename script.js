const companies = [
    { name: "Hadrian", description: "Pioneering advanced manufacturing technologies", icon: "🏭" },
    { name: "ABL Systems", description: "Developing cutting-edge aerospace solutions", icon: "🚀" },
    { name: "Rainmaker", description: "Innovative data-driven business solutions", icon: "💻" },
    { name: "Valar", description: "Pushing the boundaries of space technology", icon: "🛰️" },
    { name: "Rangeview", description: "Advanced radar and sensing technologies", icon: "📡" },
    { name: "Radiant", description: "Revolutionizing energy solutions for the future", icon: "⚡" },
    { name: "Anduril", description: "Defense technology for a safer world", icon: "🛡️" },
    { name: "Varda", description: "Pioneering space manufacturing capabilities", icon: "🌠" },
    { name: "Neros", description: "Cutting-edge AI and machine learning applications", icon: "🧠" }
];

function createCompanyCard(company) {
    return `
        <div class="card">
            <div class="card-header">
                <div class="icon">${company.icon}</div>
                <h2 class="card-title">${company.name}</h2>
            </div>
            <div class="card-content">
                <p>${company.description}</p>
            </div>
            <div class="card-footer">
                <a href="#" class="button">View Jobs</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('companies-grid');
    companies.forEach(company => {
        grid.innerHTML += createCompanyCard(company);
    });
});