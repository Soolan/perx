import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../model/book';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {

  displayedColumns = ['id', 'title', 'details', 'updatedAt', 'createdAt'];
  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(response => {
      const book = response.map(res => {
        return {
          id: res.id,
          title: res.attributes.content,
          image: res.attributes.display_properties.image,
          url: res.links.self,
          publishers: res.relationships.publishers.links.related,
          authors: res.relationships.authors.links.related,
          createdAt: res.attributes.created_at,
          updatedAt: res.attributes.updated_at
        };
      });
      this.dataSource = new MatTableDataSource(book);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
