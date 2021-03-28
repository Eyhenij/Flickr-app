import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
    let appComponent: AppComponent;
    let appFixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.componentInstance;
        appFixture.detectChanges();
    });

    it('should create', () => {
        expect(appComponent).toBeTruthy();
    });
});
