import { AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
	@Input() columns: string[];
	@Input() data: any[];
	@Output() updateEvent: EventEmitter<any> = new EventEmitter();
  
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	searchTerm: string;

	dataSource: MatTableDataSource<any>;
	constructor(private _liveAnnouncer: LiveAnnouncer) {}
	ngAfterViewInit() {
    	this.dataSource.sort = this.sort;
		  this.dataSource.paginator = this.paginator;
	  }
	
    ngOnInit()
    {
      this.dataSource = new MatTableDataSource(this.data);
    }

  camelize(str: string) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
	  if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
	  return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
  }

  editRow(rowIndex: number) {
	debugger
    const row = this.dataSource.data[rowIndex];
    row.isEditing = true;
  }

  updateRow(rowIndex: number) {
    const row = this.dataSource.data[rowIndex];
    row.isEditing = false;
    this.updateEvent.emit(row);
  }

  draggedItem: any;
  isDragging = false;

  onDragStarted(item: any) {
    this.isDragging = true;
    this.draggedItem = item;
  }

  onDragEnded() {
    this.isDragging = false;
    this.draggedItem = null;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    this.dataSource.data = this.data;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  
  applyFilter() {
    debugger
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

}
