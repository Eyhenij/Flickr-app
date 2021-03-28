import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { AppModule } from '../../app.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('FooterComponent', () => {
    let footerComponent: FooterComponent;
    let footerFixture: ComponentFixture<FooterComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [AppModule]
        }).compileComponents();

        footerFixture = TestBed.createComponent(FooterComponent);
        footerComponent = footerFixture.componentInstance;
        footerFixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(footerFixture);
    });

    it('should create', () => {
        expect(footerComponent).toBeTruthy();
    });
});
