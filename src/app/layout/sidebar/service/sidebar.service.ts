import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MenuData} from '../../model/mainModel';
import {Observable} from 'rxjs/Observable';
import {share} from 'rxjs/operators';

@Injectable()
export class SidebarService {
	private _change: BehaviorSubject<MenuData[]> = new BehaviorSubject<MenuData[]>([]);
  	private data: MenuData[] = [];
	constructor() {
	}
	add(items: MenuData[]) {
  		this.data = items;
  		this._change.next(this.data);
	}
	get change(): Observable<MenuData[]> {
		return this._change.pipe(share());
	}
}
