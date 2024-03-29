import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HerosComponent } from './heros.component';

describe('HerosComponent', () => {
    let component: HerosComponent;
    let fixture: ComponentFixture<HerosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HerosComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HerosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
