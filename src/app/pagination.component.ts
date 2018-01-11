import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export class PagingInfo {

    static create(totalCount: number, pageSize: number): PagingInfo{
        let pi: PagingInfo = new PagingInfo();
        pi.page = 1;
        pi.pageSize = pageSize;
        pi.totalCount = totalCount;
        return pi;
    }

    page: number;
    totalCount: number;
    pageSize: number;

}

@Component({
    selector: 'paginator',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent implements OnInit {

    @Input()
    pagingInfo: PagingInfo;

    @Output()
    onPageChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

    pageChanged(event: any){
        this.onPageChange.emit(event);
    }
}