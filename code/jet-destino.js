${#diceDestino:= [1d6]}$
${#setPropertyInEntity('self', 'destino', "destino - 1")}$
<table>
  <tbody>
    <tr>
      <th><div class="diableros-titre">DESTINO</div></th>
    </tr>
    <tr>
      <td>
        <div style="display: flex; align-items: center; font-size: 0.95em; padding-left: 45%;">
          <div class="diableros-dice">${!diceDestino}$</div>
        </div>
      </td>
    </tr>
  </tbody>
</table>