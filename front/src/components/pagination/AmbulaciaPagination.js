import {Pagination, PaginationItem,PaginationLink} from 'reactstrap'

function AmbulanciaPagination() {
    return (<>
        <Pagination>
            <PaginationItem>
                <PaginationLink
                    href="#"
                    previous
                />
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">
                1
            </PaginationLink>
            </PaginationItem>
            <PaginationItem>
            <PaginationLink href="#">
                2
            </PaginationLink>
            </PaginationItem>
        
            <PaginationItem>
            <PaginationLink
                href="#"
                next
            />
            </PaginationItem>
    </Pagination>

    </>);
}

export default AmbulanciaPagination;