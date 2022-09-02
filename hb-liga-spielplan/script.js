console.log("Hello")
let mensTable = `<tr><th>Platz</th><th>Mannschaft</th><th>Spiele</th><th>Siege</th><th>Unentschieden</th><th>Niederlagen</th><th>Tore</th><th>Gegentore</th><th>Tordifferenz</th><th>Punkte</th></tr>`
let womensTable = `<tr><th>Platz</th><th>Mannschaft</th><th>Spiele</th><th>Siege</th><th>Unentschieden</th><th>Niederlagen</th><th>Tore</th><th>Gegentore</th><th>Tordifferenz</th><th>Punkte</th></tr>`
let mensSchedule =  `<tr><th>Datum</th><th>Uhrzeit</th><th>Heim</th><th>Gast</th><th>Ergebnis</th><th>HZ</th><th>Spielort</th></tr>`
let womensSchedule =  `<tr><th>Datum</th><th>Uhrzeit</th><th>Heim</th><th>Gast</th><th>Ergebnis</th><th>HZ</th><th>Spielort</th></tr>`

fetch("https://api.h4a.mobi/spo/spo-proxy_public.php?cmd=data&lvTypeNext=class&subType=table&lvIDNext=71433")
  .then((response) => response.json())
  .then((json) => {
    json[0].dataList.forEach((team) => 
    mensTable +=  `<tr>
    <td>${team.tabScore}</td>
    <td>${team.tabTeamname} </td>
    <td>${team.numPlayedGames}</td>
    <td>${team.numWonGames}</td>
    <td>${team.numEqualGames}</td>
    <td>${team.numLostGames}</td>
    <td>${team.numGoalsShot}</td>
    <td>${team.numGoalsGot}</td>
    <td>${team.numGoalsShot - team.numGoalsGot}</td>
    <td>${team.pointsPlus} : ${team.pointsMinus}</td>
    </tr>`);

    document.getElementById("mensTable").innerHTML = mensTable;
  });

  fetch("https://api.h4a.mobi/spo/spo-proxy_public.php?cmd=data&lvTypeNext=class&subType=table&lvIDNext=72013")
  .then((response) => response.json())
  .then((json) => {
    json[0].dataList.forEach((team) => 
    womensTable +=  `<tr>
    <td>${team.tabScore}</td>
    <td>${team.tabTeamname} </td>
    <td>${team.numPlayedGames}</td>
    <td>${team.numWonGames}</td>
    <td>${team.numEqualGames}</td>
    <td>${team.numLostGames}</td>
    <td>${team.numGoalsShot}</td>
    <td>${team.numGoalsGot}</td>
    <td>${team.numGoalsShot - team.numGoalsGot}</td>
    <td>${team.pointsPlus} : ${team.pointsMinus}</td>
    </tr>`);

    document.getElementById("womensTable").innerHTML = womensTable;
  });

  fetch("https://api.h4a.mobi/spo/spo-proxy_public.php?cmd=data&lvTypeNext=team&lvIDNext=788776")
  .then((response) => response.json())
  .then((json) => {
    json[0].dataList.forEach((game) => 
    mensSchedule +=  `<tr>
    <td>${game.gDate}</td>
    <td>${game.gTime} </td>
    <td>${game.gHomeTeam}</td>
    <td>${game.gGuestTeam}</td>
    <td>${game.gHomeGoals} : ${game.gGuestGoals} </td>
    <td>${game.gHomeGoals_1} : ${game.gGuestGoals_1}</td>
    <td>${game.gGymnasiumName} ${game.gGymnasiumStreet} <br>${game.gGymnasiumPostal} ${game.gGymnasiumTown}</td>
    </tr>`);

    document.getElementById("mensSchedule").innerHTML = mensSchedule;
  });

  fetch("https://api.h4a.mobi/spo/spo-proxy_public.php?cmd=data&lvTypeNext=team&lvIDNext=819656")
  .then((response) => response.json())
  .then((json) => {
    json[0].dataList.forEach((game) => 
    womensSchedule +=  `<tr>
    <td>${game.gDate}</td>
    <td>${game.gTime} </td>
    <td>${game.gHomeTeam}</td>
    <td>${game.gGuestTeam}</td>
    <td>${game.gHomeGoals} : ${game.gGuestGoals} </td>
    <td>${game.gHomeGoals_1} : ${game.gGuestGoals_1}</td>
    <td>${game.gGymnasiumName} ${game.gGymnasiumStreet} <br>${game.gGymnasiumPostal} ${game.gGymnasiumTown}</td>
    </tr>`);

    document.getElementById("womensSchedule").innerHTML = womensSchedule;
  });