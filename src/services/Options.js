function opcionesTasas(tiposTasas) {
  return (
    <>
      <option disabled hidden value={1}>
        Seleccione
      </option>
      {tiposTasas.map((tipo, indx) => (
        <option key={indx}>{tipo}</option>
      ))}
    </>
  );
}

export default opcionesTasas;
