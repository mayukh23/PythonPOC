import { Component } from '@angular/core';

@Component({
  selector: 'py-root',
  templateUrl: './pyComponent.component.html'
})
export class PyComponent {
  title = 'nerveCenter';

  plantType = ["UnitName","DownTimeCategoryName","DownTimeReasonName","ShiftId","SKUId","WorkOrderId","DowntimeType","DownTimeStatus"];
}
