import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMaintainComponent } from './schedule-maintain.component';

describe('ScheduleMaintainComponent', () => {
    let component: ScheduleMaintainComponent;
    let fixture: ComponentFixture<ScheduleMaintainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ScheduleMaintainComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleMaintainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
