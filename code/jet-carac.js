${#carac:= fisico}$
${#libelle:= "Fisico"}$

${?#{_jet_carac}}$

${#nbDices:= 2 + (specialite ? 1 : 0) - (faiblesse ? 1 : 0)}$

${#d1:= [1d6]}$
${#d2:= [1d6]}$
${#d3:= [1d6]}$

<table>
  <tbody>
    <tr>
      <th><div class="diableros-titre">${!libelle}$</div></th>
    </tr>
    <tr>
      <td>
        <div style="display: flex; align-items: center; font-size: 0.95em; padding-left: 33%;">
          <div class="diableros-dice">${!d1}$</div>
          ${!nbDices >= 2 ? concat("<div class=\"diableros-dice\">", d2, "</div>") : "" }$
          ${!nbDices >= 3 ? concat("<div class=\"diableros-dice\">", d3, "</div>") : "" }$
          <div class="diableros-bonus-carac">+ ${!carac}$</div>
        </div>
      </td>
    </tr>
    ${!(specialite ? concat("<tr><td><strong>Spécialité : </strong> ",specialite,"</td></tr>") : "")}$
    ${!(faiblesse ? concat("<tr><td><strong>Faiblesse : </strong>",faiblesse,"</td></tr>") : "")}$
  </tbody>
</table>