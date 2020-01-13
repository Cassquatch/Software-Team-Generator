const generateEngineerCard = (engineer) => {
    return `<div class="card mr-3 mb-3" style="width: 18rem;">
    <div class = "card-header bg-dark">
        <h5 class="card-titlen text-white">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-white "><i class="fas fa-atom"></i> ${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${engineer.id}</p>
      <p class="card-text">Email: ${engineer.email}</p>
      <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>`
}

const generateInternCard = (intern) => {
    return `<div class="card mr-3 mb-3"style="width: 18rem;">
    <div class = "card-header bg-dark">
        <h5 class="card-title text-white">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-white "><i class = "fas fa-chalkboard-teacher"></i> ${intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${intern.id}</p>
      <p class="card-text">Email: ${intern.email}</p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>`
}

const generateManagerCard = (manager) => {
   return `<div class="card mr-3 mb-3" style="width: 18rem;">
   <div class = "card-header bg-dark">
        <h5 class="card-title text-white">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-white"><i class="fab fa-android"></i> ${manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${manager.id}</p>
      <p class="card-text">Email: ${manager.email}</a>
      <p class="card-text">Office Number: ${manager.office_number}</p>
    </div>
  </div>`
}

module.exports = {
    generateManagerCard: generateManagerCard,
    generateInternCard: generateInternCard,
    generateEngineerCard: generateEngineerCard
}