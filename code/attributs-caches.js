/**
 * statutPhysique
 */
${0 + physique1 + physique2 + physique3 + (maxPhysiqueMental == 4 ? physique4 : (maxPhysiqueMental == 5 ? physique4 + physique5 : 0))}$

/**
 * statutMental
 */
${0 + mental1 + mental2 + mental3 + (maxPhysiqueMental == 4 ? mental4 : (maxPhysiqueMental == 5 ? mental4 + mental5 : 0))}$

/**
 * specialites
 */
${array(lookup('specialitesMajeures', 'name'), lookup('specialitesMineures', 'nom'))}$
