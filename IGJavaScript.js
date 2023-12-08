igRegisterScript("CellClassesHandler", () => {
    return {
        low: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] < 10,
        high: (rowData, columnKey, cellValue, rowIndex) => rowData[columnKey] > 50
    };
}, true);
