const generateEngineerCard = (engineer) => {
    return `<div class="card" style="width: 18rem;">
    <div class = "card-header>
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${engineer.id}</p>
      <a href="#" class="card-link">${engineer.email}</a>
      <a href="#" class="card-link">${engineer.github}</a>
    </div>
  </div>`
}

const generateInternCard = (intern) => {
    return `<div class="card" style="width: 18rem;">
    <div class = "card-header>
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${intern.id}</p>
      <a href="#" class="card-link">${intern.email}</a>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>`
}

const generateManagerCard = (manager) => {
   return `<div class="card" style="width: 18rem;">
   <div class = "card-header>
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${manager.id}</p>
      <a href="#" class="card-link">Email: ${manager.email}</a>
      <p class="card-text">Office number: ${manager.office_number}</p>
    </div>
  </div>`
}

module.exports = {
    generateManagerCard: generateManagerCard,
    generateInternCard: generateInternCard,
    generateEngineerCard: generateEngineerCard
}