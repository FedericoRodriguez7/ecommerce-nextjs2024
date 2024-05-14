

export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {


//Si el numero total de paginas es 7 o menos, sin puntos suspensivos
    if (totalPages <= 7 ) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }


// si la pagina actual esta entre las 3 primeras paginas, mostrar 3, puntos suspensivos y ultimas 2
    if ( currentPage <= 3 ) {
        return [1,2,3,'...', totalPages -1, totalPages];
    }

    //si la pagina actual esta entre las ultimas 3 paginas, mostrar  las 2 primeras, puntos suspensivos y 3 finales
    if (currentPage >= totalPages - 2) {
        return [1,2,'...', totalPages -2, totalPages -1, totalPages];
    }

//si la pagina actual esta en otro lugar medio, mostrar la primera pagina, puntos suspensivos, la pagina actual y vecinos
    return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
    ]

}