import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppModule } from '../../app.module';

describe('HeaderComponent', () => {
    let headerComponent: HeaderComponent;
    let headerFixture: ComponentFixture<HeaderComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [AppModule]
        }).compileComponents();

        headerFixture = TestBed.createComponent(HeaderComponent);
        headerComponent = headerFixture.componentInstance;
        headerFixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(headerFixture);
    });

    it('should create', () => {
        expect(headerComponent).toBeTruthy();
    });
});
