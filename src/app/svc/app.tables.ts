/***********************************************************************
* Automatically generated on 8/12/2021 5:17:30 PM
***********************************************************************/

import { AppCommonMethodsService } from '../api/svc/app-common-methods.service';
import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable';
import { TableRowBase }from '../api/svc/app-common.datarow';
import { ColumnInfo } from '../api/mod/app-column.model';






export class TblChangeTracker extends TableBase {

  public rows:Array<TblChangeTrackerRow> = [];

  public tableFieldPrefix="TRK_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chgTrack";

	this.columns.push(new ColumnInfo('TRK_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_USER_LOGIN', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_TABLE_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_FIELD_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_ACTION', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_KEY_VALUE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_STAMP', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRK_REC_INFO', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, true, this));

    this.InitializeTable();

  }

  Add(row?:TblChangeTrackerRow):TblChangeTrackerRow
  {
    return super.Add(row);
  }

  NewRow():TblChangeTrackerRow{return new TblChangeTrackerRow();}
  GetRows():Array<TblChangeTrackerRow>{return this.rows;}
  public set currentRow(value:TblChangeTrackerRow){super.__currentRow(value);}
  public get currentRow():TblChangeTrackerRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChangeTrackerRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChangeTrackerRow>{return super.__newRows();}


}

export class TblChangeTrackerRow extends TableRowBase{
	constructor(
		public TRK_ID?:number, 
		public TRK_USER_LOGIN?:string, 
		public TRK_TABLE_CODE?:string, 
		public TRK_FIELD_NAME?:string, 
		public TRK_ACTION?:string, 
		public TRK_KEY_VALUE?:string, 
		public TRK_STAMP?:string, 
		public TRK_REC_INFO?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChangeTracker{ return super._Table(); }


}




export class QryDevMain extends TableBase {

  public rows:Array<QryDevMainRow> = [];

  public tableFieldPrefix="DEV_QRYDEVMAIN";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "",
  "gridColumns": [
    "REFNUM|cap=Ref.No.;center;wd=100",
    "DEVTITLE|cap=Title;mnw=120",
    "ASSET|cap=Asset;mnw=100",
    "RSCLSTAT|cap=Status;center;wd=80",
    "RAISEDATE|cap=Raised;center;wd=80",
    "APPROVED|cap=Approved;center;wd=80",
    "CLOSED|cap=Closed;center;wd=100",
    "STATUS|cap=Current Status;center;wd=110",
    "RESPONSIBLE|cap=Responsible;wd=110"
  ],
  "gridColumnsTest": [
    "STATUSCODE@CODE|cap=Code;center;wd=80",
    "DSTSTATUS|cap=Status;left;mnw=200",
    "count(REFNUM)@TOTAL|cap=Total;wd=100;center;format=2%"
  ],
  "gridColumnsTest-X": [
    "REFNUM|cap=Ref.No.;center;wd=100",
    "DEVTITLE|cap=Title;mnw=120",
    "ASSET|cap=Asset;mnw=100",
    "RSCLSTAT|cap=Status;center;wd=80",
    "RAISEDATE|cap=Raised;center;wd=80"
  ],
  "gridColumnsStatsSummary": [
    "DSTSTATUS|cap=Status;center;wd=200",
    "count(DEVID)@TOTAL|cap=Total;wd=100;format=General`%"
  ]
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="devmain";

	this.columns.push(new ColumnInfo('DEVID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ASSET', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REFNUM', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REFCODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ASSETCODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REVISION', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DEVTITLE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DSTSTATUS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('STATUS', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('STATUSCODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RSCLSTAT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PRCOSTAT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ISCOMPLETE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ISONPROGRESS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RAISEDATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DEVFROM', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('DEVTO', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RAISEDYEAR', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('APPROVED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CLPOS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CLDATEPOS', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CLOSED', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RESPONSIBLE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET1', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET3', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET4', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET5', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET6', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ET7', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP1', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP2', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP3', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP4', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP5', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP6', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP7', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AP8', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CNT_EXTEND', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('CNT_APPROVE', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('IS_WIDTHRAW', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:QryDevMainRow):QryDevMainRow
  {
    return super.Add(row);
  }

  NewRow():QryDevMainRow{return new QryDevMainRow();}
  GetRows():Array<QryDevMainRow>{return this.rows;}
  public set currentRow(value:QryDevMainRow){super.__currentRow(value);}
  public get currentRow():QryDevMainRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<QryDevMainRow>{return super.__dirtyRows();}
  public get newRows():Array<QryDevMainRow>{return super.__newRows();}


}

export class QryDevMainRow extends TableRowBase{
	constructor(
		public DEVID?:number, 
		public ASSET?:string, 
		public REFNUM?:string, 
		public REFCODE?:string, 
		public ASSETCODE?:string, 
		public REVISION?:string, 
		public DEVTITLE?:string, 
		public DSTSTATUS?:string, 
		public STATUS?:string, 
		public STATUSCODE?:string, 
		public RSCLSTAT?:string, 
		public PRCOSTAT?:string, 
		public ISCOMPLETE?:number, 
		public ISONPROGRESS?:number, 
		public RAISEDATE?:Date, 
		public DEVFROM?:Date, 
		public DEVTO?:Date, 
		public RAISEDYEAR?:number, 
		public APPROVED?:Date, 
		public CLPOS?:number, 
		public CLDATEPOS?:number, 
		public CLOSED?:Date, 
		public RESPONSIBLE?:string, 
		public ET1?:number, 
		public ET2?:number, 
		public ET3?:number, 
		public ET4?:number, 
		public ET5?:number, 
		public ET6?:number, 
		public ET7?:number, 
		public AP1?:number, 
		public AP2?:number, 
		public AP3?:number, 
		public AP4?:number, 
		public AP5?:number, 
		public AP6?:number, 
		public AP7?:number, 
		public AP8?:number, 
		public CNT_EXTEND?:number, 
		public CNT_APPROVE?:number, 
		public IS_WIDTHRAW?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():QryDevMain{ return super._Table(); }


}




export class SysLocks extends TableBase {

  public rows:Array<SysLocksRow> = [];

  public tableFieldPrefix="LOCK_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "keyField": "LOCK_ID"
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="lk";

	this.columns.push(new ColumnInfo('LOCK_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_TABLE_CODE', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_RECORD_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_USER_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_START', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LOCK_END', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:SysLocksRow):SysLocksRow
  {
    return super.Add(row);
  }

  NewRow():SysLocksRow{return new SysLocksRow();}
  GetRows():Array<SysLocksRow>{return this.rows;}
  public set currentRow(value:SysLocksRow){super.__currentRow(value);}
  public get currentRow():SysLocksRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<SysLocksRow>{return super.__dirtyRows();}
  public get newRows():Array<SysLocksRow>{return super.__newRows();}


}

export class SysLocksRow extends TableRowBase{
	constructor(
		public LOCK_ID?:number, 
		public LOCK_TABLE_CODE?:string, 
		public LOCK_RECORD_ID?:number, 
		public LOCK_USER_NAME?:string, 
		public LOCK_START?:Date, 
		public LOCK_END?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():SysLocks{ return super._Table(); }


}




export class TblUserParam extends TableBase {

  public rows:Array<TblUserParamRow> = [];

  public tableFieldPrefix="USER_PARAM_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="param";

	this.columns.push(new ColumnInfo('USER_PARAM_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_PARAM_USER_ID', 'number', '', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_LKP_ID', 'number', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_TEXT', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUserParamRow):TblUserParamRow
  {
    return super.Add(row);
  }

  NewRow():TblUserParamRow{return new TblUserParamRow();}
  GetRows():Array<TblUserParamRow>{return this.rows;}
  public set currentRow(value:TblUserParamRow){super.__currentRow(value);}
  public get currentRow():TblUserParamRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserParamRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserParamRow>{return super.__newRows();}


}

export class TblUserParamRow extends TableRowBase{
	constructor(
		public USER_PARAM_ID?:number, 
		public USER_PARAM_USER_ID?:number, 
		public PARAM_ID?:number, 
		public PARAM_LKP_ID?:number, 
		public PARAM_TEXT?:string, 
		public PARAM_UPDATE_DATE?:Date){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserParam{ return super._Table(); }


}




export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="USER_";
	private _tableLinks:Array<string> = [];
	private _links:Array<any> = [];
	public clientConfig:any = {
  "roles": "users",
  "lookupText": "USER_NAME",
  "lookupTextAsValue": true
};

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="users";

	this.columns.push(new ColumnInfo('USER_ID', 'number', '', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_NAME', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_UPDATE_DATE', 'Date', '', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_PREFERENCES', 'string', '', '', '', -1, -1, -1, -1, -1, false, false, true, this));

    this.InitializeTable();

  }

  Add(row?:TblUsersRow):TblUsersRow
  {
    return super.Add(row);
  }

  NewRow():TblUsersRow{return new TblUsersRow();}
  GetRows():Array<TblUsersRow>{return this.rows;}
  public set currentRow(value:TblUsersRow){super.__currentRow(value);}
  public get currentRow():TblUsersRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUsersRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUsersRow>{return super.__newRows();}


}

export class TblUsersRow extends TableRowBase{
	constructor(
		public USER_ID?:number, 
		public USER_NAME?:string, 
		public USER_UPDATE_DATE?:Date, 
		public USER_PREFERENCES?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super._Table(); }


}
