import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayMaintainComponent } from './holiday-maintain.component';

describe('HolidayMaintainComponent', () => {
    let component: HolidayMaintainComponent;
    let fixture: ComponentFixture<HolidayMaintainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HolidayMaintainComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HolidayMaintainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
