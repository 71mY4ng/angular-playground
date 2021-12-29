import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDialogComponent } from './dy-dialog.component';

describe('DyDialogComponent', () => {
    let component: DyDialogComponent;
    let fixture: ComponentFixture<DyDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ DyDialogComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DyDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
