function useIndicator() {
    const head = ["Mes", "Año", "Monto", "Cantidad"]
    const body = [
        { mes: "12", anio: "2024", monto: "1.458", cantidad: "88" },
        { mes: "11", anio: "2024", monto: "115", cantidad: "15" },
        { mes: "10", anio: "2024", monto: "7.387", cantidad: "13" },
        { mes: "9", anio: "2024", monto: "1.458", cantidad: "98" },
        { mes: "8", anio: "2024", monto: "1.487", cantidad: "154" },
        { mes: "7", anio: "2024", monto: "2.158", cantidad: "321" },
        { mes: "6", anio: "2024", monto: "9.185", cantidad: "487" },
        { mes: "5", anio: "2024", monto: "4.458", cantidad: "8" },
        { mes: "4", anio: "2024", monto: "3.701", cantidad: "1964" },
        { mes: "3", anio: "2024", monto: "1.877", cantidad: "3187" },
        { mes: "2", anio: "2024", monto: "1.990", cantidad: "87" },
        { mes: "1", anio: "2024", monto: "2.157", cantidad: "8138" },
    ]
    const total = "1.512.015"

    return { head, body, total }
}

export default useIndicator;