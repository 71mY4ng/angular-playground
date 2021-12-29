import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFileComponent } from './server-file.component';

describe('ServerFileComponent', () => {
    let component: ServerFileComponent;
    let fixture: ComponentFixture<ServerFileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ServerFileComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServerFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
