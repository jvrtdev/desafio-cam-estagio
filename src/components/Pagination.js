import PaginationButtons from "./PaginationButtons";


const Pagination = ({ photosPerPage, totalPhotos, paginate, currentPage, totalpages}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-10">
            <ul className="flex justify-center gap-1">
                <PaginationButtons 
                paginate={paginate}
                currentPage={currentPage}
                totalpages={totalpages}
                />
            </ul>
        </nav>
    );
};

export default Pagination